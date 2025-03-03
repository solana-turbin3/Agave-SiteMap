import { TwitterCard } from "@/app/ui/twittercard"
import { VideoCard } from "@/app/ui/videocard"
import { FileDocumentation } from "@/app/ui/file-documentation"
import { BlockBuildingMap } from "@/app/ui/block-building-map"
import Checkout from "@/components/checkout"

export default function FetchStagePage() {
    const files = [
        {
            filePath: "core/src/tpu_entry_notifier.rs",
            role: "This file likely contains code that notifies or processes entries related to the TPU, which could be part of the Fetch Stage.",
            functions: [{
                name: "notify_entry",
                description: "Handles the notification of new entries, which might be part of the transaction processing pipeline.",
                inputs: [{ name: "entry: &Entry", description: "A reference to the entry that needs to be notified." }],
                outputs: ["None"],
                codeSnippet: { language: "rust", code: "fn notify_entry(entry: &Entry) {\n    // Code to handle entry notification\n}" }
            }]
        },
        {
            filePath: "core/src/tpu.rs",
            role: "This file is central to the TPU's operation and likely contains the main logic for handling transactions during the Fetch Stage.",
            functions: [{
                name: "fetch_transactions",
                description: "Responsible for fetching transactions from the network or a queue.",
                inputs: [],
                outputs: ["None (assumed to modify internal state or queue)"],
                codeSnippet: { language: "rust", code: "fn fetch_transactions() {\n    // Code to fetch transactions\n}" }
            }]
        },
        {
            filePath: "core/src/banking_stage/banking_stage.rs",
            role: "This file may contain logic for processing transactions, including fetching them from a queue or network.",
            functions: [{
                name: "process_and_fetch_transactions",
                description: "Processes and fetches transactions for further stages.",
                inputs: [{ name: "transaction_queue: &TransactionQueue", description: "A reference to the queue of transactions to be processed." }],
                outputs: ["None (assumed to modify internal state or queue)"],
                codeSnippet: { language: "rust", code: "fn process_and_fetch_transactions(transaction_queue: &TransactionQueue) {\n    // Code to process and fetch transactions\n}" }
            }]
        },
        {
            filePath: "core/src/repair/repair_service.rs",
            role: "This file may contain logic for repairing the blockchain state, which could impact transaction processing during the Fetch Stage.",
            functions: [{
                name: "fetch_missing_transactions",
                description: "Fetches missing transactions as part of the repair process.",
                inputs: [{ name: "missing_slots: &[Slot]", description: "A slice of slots for which transactions are missing." }],
                outputs: ["None (assumed to modify internal state or queue)"],
                codeSnippet: { language: "rust", code: "fn fetch_missing_transactions(missing_slots: &[Slot]) {\n    // Code to fetch missing transactions\n}" }
            }]
        },
        {
            filePath: "banks-client/src/lib.rs",
            role: "Manages client interactions, potentially involving transaction fetching.",
            functions: [{
                name: "fetch_client_transactions",
                description: "Fetches transactions from the client.",
                inputs: [{ name: "client_id: &ClientId", description: "The ID of the client." }],
                outputs: ["Result<Vec<Transaction>, Error>"],
                codeSnippet: { language: "rust", code: "fn fetch_client_transactions(client_id: &ClientId) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}" }
            }]
        },
        {
            filePath: "banks-interface/src/lib.rs",
            role: "Defines interfaces for bank interactions, potentially involving transaction fetching.",
            functions: [{
                name: "fetch_interface_transactions",
                description: "Fetches transactions through the interface.",
                inputs: [{ name: "interface_id: &InterfaceId", description: "The ID of the interface." }],
                outputs: ["Result<Vec<Transaction>, Error>"],
                codeSnippet: { language: "rust", code: "fn fetch_interface_transactions(interface_id: &InterfaceId) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}" }
            }]
        },
        {
            filePath: "banks-server/src/lib.rs",
            role: "Manages server operations, potentially involving transaction fetching.",
            functions: [{
                name: "fetch_server_transactions",
                description: "Fetches transactions from the server.",
                inputs: [{ name: "server_id: &ServerId", description: "The ID of the server." }],
                outputs: ["Result<Vec<Transaction>, Error>"],
                codeSnippet: { language: "rust", code: "fn fetch_server_transactions(server_id: &ServerId) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}" }
            }]
        },
        {
            filePath: "builtins/src/lib.rs",
            role: "Provides built-in functions that may involve transaction fetching.",
            functions: [{
                name: "fetch_builtin_transactions",
                description: "Fetches transactions using built-in methods.",
                inputs: [{ name: "source: &Source", description: "The source to fetch transactions from." }],
                outputs: ["Result<Vec<Transaction>, Error>"],
                codeSnippet: { language: "rust", code: "fn fetch_builtin_transactions(source: &Source) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}" }
            }]
        },
        {
            filePath: "compute-budget/src/lib.rs",
            role: "Manages compute budgets, potentially involving transaction fetching.",
            functions: [{
                name: "allocate_compute_budget",
                description: "Allocates compute budget for transactions.",
                inputs: [{ name: "transaction_id: &TransactionId", description: "The ID of the transaction." }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn allocate_compute_budget(transaction_id: &TransactionId) -> Result<(), Error> {\n    // Code to allocate compute budget\n}" }
            }]
        },
        {
            filePath: "compute-budget-instruction/src/lib.rs",
            role: "Manages instructions for compute budgets, potentially involving transaction fetching.",
            functions: [{
                name: "fetch_compute_budget_instructions",
                description: "Fetches instructions related to compute budgets.",
                inputs: [{ name: "instruction_id: &InstructionId", description: "The ID of the instruction." }],
                outputs: ["Result<Vec<Instruction>, Error>"],
                codeSnippet: { language: "rust", code: "fn fetch_compute_budget_instructions(instruction_id: &InstructionId) -> Result<Vec<Instruction>, Error> {\n    // Code to fetch instructions\n}" }
            }]
        },
        {
            filePath: "poh/src/lib.rs",
            role: "Manages Proof of History, potentially involving transaction timing.",
            functions: [{
                name: "record_poh_entry",
                description: "Records a PoH entry for transactions.",
                inputs: [{ name: "entry: &Entry", description: "The entry to record." }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn record_poh_entry(entry: &Entry) -> Result<(), Error> {\n    // Code to record PoH entry\n}" }
            }]
        },
        {
            filePath: "program-runtime/src/lib.rs",
            role: "Manages program execution, potentially involving transaction fetching.",
            functions: [{
                name: "execute_program_transactions",
                description: "Executes transactions within a program.",
                inputs: [{ name: "transactions: &[Transaction]", description: "The transactions to execute." }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn execute_program_transactions(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to execute transactions\n}" }
            }]
        },
        {
            filePath: "runtime/src/lib.rs",
            role: "Manages runtime operations, potentially involving transaction fetching.",
            functions: [{
                name: "execute_runtime_transactions",
                description: "Executes transactions within the runtime.",
                inputs: [{ name: "transactions: &[Transaction]", description: "The transactions to execute." }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn execute_runtime_transactions(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to execute transactions\n}" }
            }]
        },
        {
            filePath: "fee/src/lib.rs",
            role: "Manages transaction fees, potentially involving transaction fetching.",
            functions: [{
                name: "calculate_transaction_fee",
                description: "Calculates the fee for a transaction.",
                inputs: [{ name: "transaction: &Transaction", description: "The transaction to calculate fee for." }],
                outputs: ["Result<Fee, Error>"],
                codeSnippet: { language: "rust", code: "fn calculate_transaction_fee(transaction: &Transaction) -> Result<Fee, Error> {\n    // Code to calculate transaction fee\n}" }
            }]
        },
        {
            filePath: "runtime-transaction/src/lib.rs",
            role: "Manages transactions within the runtime, potentially involving transaction fetching.",
            functions: [{
                name: "process_runtime_transactions",
                description: "Processes transactions within the runtime.",
                inputs: [{ name: "transactions: &[Transaction]", description: "The transactions to process." }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn process_runtime_transactions(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to process transactions\n}" }
            }]
        },
        {
            filePath: "cost-model/src/lib.rs",
            role: "Manages cost models, potentially involving transaction fetching.",
            functions: [{
                name: "calculate_transaction_cost",
                description: "Calculates the cost for a transaction.",
                inputs: [{ name: "transaction: &Transaction", description: "The transaction to calculate cost for." }],
                outputs: ["Result<Cost, Error>"],
                codeSnippet: { language: "rust", code: "fn calculate_transaction_cost(transaction: &Transaction) -> Result<Cost, Error> {\n    // Code to calculate transaction cost\n}" }
            }]
        }
    ];

    return (
        <div>
            <div className="bg-background-hero">
                <div className="container mx-auto p-12 gap-12 flex flex-col items-center justify-center">
                    
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-6 text-white">Fetch Stage</h1>
                        <p className="text-lg mb-4 text-white">
                        The Fetch Stage in the TPU involves fetching transactions and notifying relevant components. 
                        </p>
                        <Checkout />
                    </div>

                    <div className="flex justify-center">
                        <BlockBuildingMap />
                    </div>

               
                </div>
            </div>
            <div className="container mx-auto p-8 max-w-7xl">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-9">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Relevant Agave File Paths</h2>
                            <ul className="list-disc pl-4">
                                {files.map((file) => (
                                    <li key={file.filePath}>
                                        <a 
                                            href={`#${file.filePath.replace(/\//g, '-')}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {file.filePath}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="mt-8 space-y-8">
                            {files.map((file) => (
                                <FileDocumentation 
                                    key={file.filePath}
                                    {...file}
                                />
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
    )
} 