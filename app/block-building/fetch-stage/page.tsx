import { BlockBuildingMap } from "@/app/block-building/_components/block-building-map";
import { cargoToml } from "@/app/data/cargo-toml";
import { fetchStageFiles } from "@/lib/constants";
import { constructMetaData } from "@/lib/metadata";
import { TwitterCard } from "@/components/ui/twittercard";
import { VideoCard } from "@/components/ui/videocard";
import { FileDocumentation } from "@/components/ui/file-documentation";
import Checkout from "@/components/checkout";

export const metadata = constructMetaData({
  title: "Fetch-Stage | AGAVE Map",
  description: "This is Fetch Stage page",
});

interface Step {
  title: string;
  description: string;
  command: string;
  isAsync?: boolean;
}

const fetchStageSteps: Step[] = [
  {
    title: "Clone Empty Repository",
    description: "First, clone the empty Agave repository",
    command:
      "git clone --filter=blob:none --sparse https://github.com/anza-xyz/agave.git agave-fetch-stage && cd agave-fetch-stage",
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
      "Run the following command to compile only the fetch stage related packages",
    command:
      "cargo build --package solana-streamer --package solana-core --package solana-quic-client",
  },
];

export default function FetchStagePage() {
  return (
    <div>
      <div className="bg-background-hero">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 p-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-6 text-4xl font-bold text-white">Fetch Stage</h1>
            <p className="mb-4 text-lg text-white">
              The Fetch Stage in the TPU involves fetching transactions and
              notifying relevant components.
            </p>
            <Checkout
              steps={fetchStageSteps}
              title="Clone Fetch Stage to your repo"
            />
          </div>

          <div className="flex justify-center">
            <BlockBuildingMap />
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
                {fetchStageFiles.map((file) => (
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
              {fetchStageFiles.map((file) => (
                <FileDocumentation key={file.filePath} {...file} />
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col gap-4">
              <VideoCard
                title="Fetch Stage by Joe C"
                description="This video covers the Fetch Stage in the TPU, including the role of the TPU Entry Notifier, TPU, Banking Stage, Repair Service, and more."
                thumbnailUrl="/Solana_Title.jpg"
                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
              <TwitterCard
                name="toly"
                handle="aeyakovenko"
                avatarUrl="/twitter.jpg"
                profileUrl="https://twitter.com/johndoe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
