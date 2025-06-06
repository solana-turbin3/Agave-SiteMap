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
              Banking Stage
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
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                Relevant Agave File Paths
              </h2>
              <ul className="list-disc pl-4">
                {bankingStageFiles.map((file) => (
                  <li key={file.filePath}>
                    <a
                      href={`#${file.filePath.replace(/\//g, "-")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {file.filePath}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-8">
              {bankingStageFiles.map((file) => (
                <FileDocumentation key={file.filePath} {...file} />
              ))}
            </div>

            <div className="mt-16">
              <h2 className="mb-4 text-2xl font-bold">
                Relevant Packages by File Path
              </h2>
              <ul className="list-disc pl-4">
                <li>
                  <strong>core</strong> → <code>solana-core</code>
                </li>
                <li>
                  <strong>banks-client</strong> →{" "}
                  <code>solana-banks-client</code>
                </li>
                <li>
                  <strong>banks-interface</strong> →{" "}
                  <code>solana-banks-interface</code>
                </li>
                <li>
                  <strong>banks-server</strong> →{" "}
                  <code>solana-banks-server</code>
                </li>
                <li>
                  <strong>builtins</strong> → <code>solana-builtins</code>
                </li>
                <li>
                  <strong>compute-budget</strong> →{" "}
                  <code>solana-compute-budget</code>
                </li>
                <li>
                  <strong>compute-budget-instruction</strong> →{" "}
                  <code>solana-compute-budget-instruction</code>
                </li>
                <li>
                  <strong>program-runtime</strong> →{" "}
                  <code>solana-program-runtime</code>
                </li>
                <li>
                  <strong>runtime</strong> → <code>solana-runtime</code>
                </li>
                <li>
                  <strong>runtime-transaction</strong> →{" "}
                  <code>solana-runtime-transaction</code>
                </li>
                <li>
                  <strong>fee</strong> → <code>solana-fee</code>
                </li>
                <li>
                  <strong>cost-model</strong> → <code>solana-cost-model</code>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <VideoCard
                title="Banking Stage Deep Dive"
                description="Learn how Solana's Banking Stage processes verified transactions and commits state transitions."
                thumbnailUrl="/Solana_Title.jpg"
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
              <TwitterCard
                name="Anatoly Yakovenko"
                handle="aeyakovenko"
                avatarUrl="/twitter.jpg"
                profileUrl="https://twitter.com/aeyakovenko"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
