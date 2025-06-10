import { BlockBuildingMap } from "@/app/block-building/_components/block-building-map";
import { cargoToml } from "@/app/data/cargo-toml";
import { bankingStageDialogData, bankingStageFiles } from "@/lib/constants";
import { constructMetaData } from "@/lib/metadata";
import { TwitterCard } from "@/components/ui/twittercard";
import { VideoCard } from "@/components/ui/videocard";
import { FileDocumentation } from "@/components/ui/file-documentation";
import Checkout from "@/components/checkout";
import React from "react";
import { BankingMap } from "../_components/banking-map";

export const metadata = constructMetaData({
  title: "Banking Stage | AGAVE Map",
  description: "This is the Banking Stage page for Solana TPU pipeline",
});

interface Step {
  title: string;
  description: string;
  command: string;
  isAsync?: boolean;
}

const bankingStageSteps: Step[] = [
  {
    title: "Clone Empty Repository",
    description: "First, clone the empty Agave repository",
    command:
      "git clone --filter=blob:none --sparse https://github.com/anza-xyz/agave.git agave-banking-stage && cd agave-banking-stage",
  },
  {
    title: "Checkout Necessary Files",
    description: "Next, checkout the required files from the Solana repository",
    command: "__dynamic_git_command__",
    isAsync: true,
  },
  {
    title: "Replace the Cargo.toml file",
    description:
      "Copy the following code and replace the Cargo.toml in your root directory",
    command: cargoToml,
  },
  {
    title: "To compile it run:",
    description:
      "Run the following command to compile only the banking stage related packages",
    command:
      "cargo build --package solana-core --package solana-runtime --package solana-banks-server",
  },
];

export default function BankingStagePage() {
  return (
    <div>
      <div className="bg-background-hero">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 p-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-6 text-4xl font-bold text-white">
             BlockBuilding - Banking Stage
            </h1>
            <p className="mb-4 text-lg text-white">
              The Banking Stage is responsible for executing transactions after
              they are verified, updating the state of accounts, and generating
              entries to persist state transitions.
            </p>
            <Checkout
              steps={bankingStageSteps}
              title="Clone Banking Stage to your repo"
            />
          </div>        
          <BlockBuildingMap />

          <h2 className="text-3xl font-bold text-white">
          Banking Stage
          </h2>
          <p className="text-lg text-white">
              The Banking Stage is super complicated and this is the actual process behind this.
          </p>
          <div className="flex justify-center">
            <BankingMap
              dialogData={bankingStageDialogData}
              className="h-[700px]"
            />
          </div>

       

        </div>
      </div>

      <div className="container mx-auto max-w-7xl p-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            
            
          </div>

          
        </div>
      </div>
    </div>
  );
}
