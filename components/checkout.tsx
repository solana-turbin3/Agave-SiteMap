"use client";

import { useState, useEffect } from "react";

import GitCommandsLoader from "@/app/wasm/loaders/git-command-loader";
import inputData from "@/app/data/packages_with_path.json";
import { Button } from "@/components/ui/button";
import CommandModal from "./command-modal";

interface Step {
  title: string;
  description: string;
  command: string;
  isAsync?: boolean;
}

interface CheckoutProps {
  steps: Step[];
  title?: string;
}

const Checkout = ({
  steps,
  title = "Clone Stage to your repo",
}: CheckoutProps) => {
  const [isWasmLoaded, setIsWasmLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolvedSteps, setResolvedSteps] = useState<Step[]>([]);

  useEffect(() => {
    GitCommandsLoader.init()
      .then(() => setIsWasmLoaded(true))
      .catch((error) => console.error("Error loading WASM:", error));
  }, []);

  useEffect(() => {
    const resolveAsyncSteps = async () => {
      const resolved = await Promise.all(
        steps.map(async (step) => {
          if (step.isAsync && step.command === "__dynamic_git_command__") {
            const gitCommand = GitCommandsLoader.createGitCommand(
              JSON.stringify(inputData),
              "solana-core,solana-streamer,solana-quic-client"
            );
            return { ...step, command: gitCommand };
          }
          return step;
        })
      );
      setResolvedSteps(resolved);
    };

    if (isWasmLoaded) {
      resolveAsyncSteps();
    }
  }, [isWasmLoaded, steps]);

  return (
    <div>
      {isWasmLoaded && resolvedSteps.length > 0 && (
        <>
          <Button
            className="w-full bg-primary-color hover:bg-primary-color/80"
            onClick={() => setIsModalOpen(true)}
          >
            {title}
          </Button>
          <CommandModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            steps={resolvedSteps}
          />
        </>
      )}
    </div>
  );
};

export default Checkout;
