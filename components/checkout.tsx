'use client';
import { useState, useEffect } from 'react';
import GitCommandsLoader from '@/app/wasm/loaders/git-command-loader';
import CommandModal, { Step } from './command-modal';
import inputData from '@/app/data/packages_with_path.json';
import { Button } from "@/components/ui/button"
import { cargoToml } from '@/app/data/cargo-toml';

const Checkout = () => {
  const [isWasmLoaded, setIsWasmLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gitCommand, setGitCommand] = useState<string>("");

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
        const command = await GitCommandsLoader.createGitCommand(JSON.stringify(inputData), "solana-core,solana-streamer,solana-quic-client"); // TODO: these are the fetch stage packages - make this dynamic 
        setGitCommand(command);
        return command;
      },
      isAsync: true
    },
    {
      title: "Replace the Cargo.toml file",
      description: "Copy the following code and replace the Cargo.toml in your root directory",
      command: cargoToml, // TODO: only for fetch stage - make this dynamic
      // async () => {
      //   const result = await GitCommandsLoader.update_cargo_toml(gitCommand, cargoToml);
      //   return result;
      // },
      // isAsync: true
    },
    {
      title: "To compile it run:",
      description: "Copy the following code and replace the Cargo.toml in your root directory",
      command: "cargo build --package solana-streamer --package solana-core --package solana-quic-client" // TODO: these are the fetch stage packages - make this dynamic 
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