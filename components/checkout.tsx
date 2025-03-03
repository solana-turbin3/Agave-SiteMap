'use client';
import { useState, useEffect } from 'react';
import GitCommandsLoader from '@/app/wasm/loaders/git-command-loader';
import CommandModal, { Step } from './command-modal';
import inputData from '@/app/data/packages_with_path.json';
import { Button } from "@/components/ui/button"

const Checkout = () => {
  const [isWasmLoaded, setIsWasmLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    GitCommandsLoader.init()
      .then(() => setIsWasmLoaded(true))
      .catch(error => console.error("Error loading WASM:", error));
  }, []);

  const steps: Step[] = [
    {
      title: "Clone Empty Repository",
      description: "First, clone the empty Agave repository",
      command: "git clone --filter=blob:none --sparse https://github.com/anza-xyz/agave.git agave-fetch-stage && cd agave-fetch-stage",
    },
    {
      title: "Checkout Necessary Files",
      description: "Next, checkout the required files from the Solana repository",
      command: async () => {
        return GitCommandsLoader.createGitCommand(JSON.stringify(inputData), 'solana-core');
      },
      isAsync: true
    },
    {
      title: "Replace the Cargo.toml file",
      description: "Copy the following code and replace the Cargo.toml in your root directory",
      command: "cargo toml code",
    },
  ];

  return (
    <div>
      {isWasmLoaded && (
        <>
          <Button className="bg-primary-color hover:bg-primary-color/80 w-3/4 w-full" onClick={() => setIsModalOpen(true)}>
            Clone Fetch Stage to your repo
          </Button>
          <CommandModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            steps={steps}
          />
        </>
      )}
    </div>
  );
}

export default Checkout;