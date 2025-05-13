import exp from "node:constants";

const fetchStageFiles = [
  {
    filePath: "core/src/tpu_entry_notifier.rs",
    role: "This file likely contains code that notifies or processes entries related to the TPU, which could be part of the Fetch Stage.",
    functions: [
      {
        name: "notify_entry",
        description:
          "Handles the notification of new entries, which might be part of the transaction processing pipeline.",
        inputs: [
          {
            name: "entry: &Entry",
            description: "A reference to the entry that needs to be notified.",
          },
        ],
        outputs: ["None"],
        codeSnippet: {
          language: "rust",
          code: "fn notify_entry(entry: &Entry) {\n    // Code to handle entry notification\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/tpu.rs",
    role: "This file is central to the TPU's operation and likely contains the main logic for handling transactions during the Fetch Stage.",
    functions: [
      {
        name: "fetch_transactions",
        description:
          "Responsible for fetching transactions from the network or a queue.",
        inputs: [],
        outputs: ["None (assumed to modify internal state or queue)"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_transactions() {\n    // Code to fetch transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/banking_stage/banking_stage.rs",
    role: "This file may contain logic for processing transactions, including fetching them from a queue or network.",
    functions: [
      {
        name: "process_and_fetch_transactions",
        description: "Processes and fetches transactions for further stages.",
        inputs: [
          {
            name: "transaction_queue: &TransactionQueue",
            description:
              "A reference to the queue of transactions to be processed.",
          },
        ],
        outputs: ["None (assumed to modify internal state or queue)"],
        codeSnippet: {
          language: "rust",
          code: "fn process_and_fetch_transactions(transaction_queue: &TransactionQueue) {\n    // Code to process and fetch transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/repair/repair_service.rs",
    role: "This file may contain logic for repairing the blockchain state, which could impact transaction processing during the Fetch Stage.",
    functions: [
      {
        name: "fetch_missing_transactions",
        description:
          "Fetches missing transactions as part of the repair process.",
        inputs: [
          {
            name: "missing_slots: &[Slot]",
            description: "A slice of slots for which transactions are missing.",
          },
        ],
        outputs: ["None (assumed to modify internal state or queue)"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_missing_transactions(missing_slots: &[Slot]) {\n    // Code to fetch missing transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-client/src/lib.rs",
    role: "Manages client interactions, potentially involving transaction fetching.",
    functions: [
      {
        name: "fetch_client_transactions",
        description: "Fetches transactions from the client.",
        inputs: [
          {
            name: "client_id: &ClientId",
            description: "The ID of the client.",
          },
        ],
        outputs: ["Result<Vec<Transaction>, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_client_transactions(client_id: &ClientId) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-interface/src/lib.rs",
    role: "Defines interfaces for bank interactions, potentially involving transaction fetching.",
    functions: [
      {
        name: "fetch_interface_transactions",
        description: "Fetches transactions through the interface.",
        inputs: [
          {
            name: "interface_id: &InterfaceId",
            description: "The ID of the interface.",
          },
        ],
        outputs: ["Result<Vec<Transaction>, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_interface_transactions(interface_id: &InterfaceId) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-server/src/lib.rs",
    role: "Manages server operations, potentially involving transaction fetching.",
    functions: [
      {
        name: "fetch_server_transactions",
        description: "Fetches transactions from the server.",
        inputs: [
          {
            name: "server_id: &ServerId",
            description: "The ID of the server.",
          },
        ],
        outputs: ["Result<Vec<Transaction>, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_server_transactions(server_id: &ServerId) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "builtins/src/lib.rs",
    role: "Provides built-in functions that may involve transaction fetching.",
    functions: [
      {
        name: "fetch_builtin_transactions",
        description: "Fetches transactions using built-in methods.",
        inputs: [
          {
            name: "source: &Source",
            description: "The source to fetch transactions from.",
          },
        ],
        outputs: ["Result<Vec<Transaction>, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_builtin_transactions(source: &Source) -> Result<Vec<Transaction>, Error> {\n    // Code to fetch transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "compute-budget/src/lib.rs",
    role: "Manages compute budgets, potentially involving transaction fetching.",
    functions: [
      {
        name: "allocate_compute_budget",
        description: "Allocates compute budget for transactions.",
        inputs: [
          {
            name: "transaction_id: &TransactionId",
            description: "The ID of the transaction.",
          },
        ],
        outputs: ["Result<(), Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn allocate_compute_budget(transaction_id: &TransactionId) -> Result<(), Error> {\n    // Code to allocate compute budget\n}",
        },
      },
    ],
  },
  {
    filePath: "compute-budget-instruction/src/lib.rs",
    role: "Manages instructions for compute budgets, potentially involving transaction fetching.",
    functions: [
      {
        name: "fetch_compute_budget_instructions",
        description: "Fetches instructions related to compute budgets.",
        inputs: [
          {
            name: "instruction_id: &InstructionId",
            description: "The ID of the instruction.",
          },
        ],
        outputs: ["Result<Vec<Instruction>, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn fetch_compute_budget_instructions(instruction_id: &InstructionId) -> Result<Vec<Instruction>, Error> {\n    // Code to fetch instructions\n}",
        },
      },
    ],
  },
  {
    filePath: "poh/src/lib.rs",
    role: "Manages Proof of History, potentially involving transaction timing.",
    functions: [
      {
        name: "record_poh_entry",
        description: "Records a PoH entry for transactions.",
        inputs: [
          { name: "entry: &Entry", description: "The entry to record." },
        ],
        outputs: ["Result<(), Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn record_poh_entry(entry: &Entry) -> Result<(), Error> {\n    // Code to record PoH entry\n}",
        },
      },
    ],
  },
  {
    filePath: "program-runtime/src/lib.rs",
    role: "Manages program execution, potentially involving transaction fetching.",
    functions: [
      {
        name: "execute_program_transactions",
        description: "Executes transactions within a program.",
        inputs: [
          {
            name: "transactions: &[Transaction]",
            description: "The transactions to execute.",
          },
        ],
        outputs: ["Result<(), Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn execute_program_transactions(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to execute transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime/src/lib.rs",
    role: "Manages runtime operations, potentially involving transaction fetching.",
    functions: [
      {
        name: "execute_runtime_transactions",
        description: "Executes transactions within the runtime.",
        inputs: [
          {
            name: "transactions: &[Transaction]",
            description: "The transactions to execute.",
          },
        ],
        outputs: ["Result<(), Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn execute_runtime_transactions(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to execute transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "fee/src/lib.rs",
    role: "Manages transaction fees, potentially involving transaction fetching.",
    functions: [
      {
        name: "calculate_transaction_fee",
        description: "Calculates the fee for a transaction.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to calculate fee for.",
          },
        ],
        outputs: ["Result<Fee, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn calculate_transaction_fee(transaction: &Transaction) -> Result<Fee, Error> {\n    // Code to calculate transaction fee\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime-transaction/src/lib.rs",
    role: "Manages transactions within the runtime, potentially involving transaction fetching.",
    functions: [
      {
        name: "process_runtime_transactions",
        description: "Processes transactions within the runtime.",
        inputs: [
          {
            name: "transactions: &[Transaction]",
            description: "The transactions to process.",
          },
        ],
        outputs: ["Result<(), Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn process_runtime_transactions(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to process transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "cost-model/src/lib.rs",
    role: "Manages cost models, potentially involving transaction fetching.",
    functions: [
      {
        name: "calculate_transaction_cost",
        description: "Calculates the cost for a transaction.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to calculate cost for.",
          },
        ],
        outputs: ["Result<Cost, Error>"],
        codeSnippet: {
          language: "rust",
          code: "fn calculate_transaction_cost(transaction: &Transaction) -> Result<Cost, Error> {\n    // Code to calculate transaction cost\n}",
        },
      },
    ],
  },


];

export { fetchStageFiles };

const signatureVerifyFiles = [
  {
    filePath: "core/src/sigverify_stage.rs",
    role: "Implements the signature verification stage of the Transaction Processing Unit (TPU), verifying transaction signatures in parallel using CPU or GPU acceleration.",
    functions: [
      {
        name: "verify_packets",
        description: "Verifies the signatures of incoming transaction packets.",
        inputs: [
          {
            name: "packets: &[Packet]",
            description: "A slice of transaction packets to verify.",
          },
        ],
        outputs: ["Vec<bool>"],
        codeSnippet: {
          language: "rust",
          code: "fn verify_packets(packets: &[Packet]) -> Vec<bool> {\n    // Parallel signature verification logic\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/banking_stage/banking_stage.rs",
    role: "Processes verified transactions and forwards them to the banking stage for execution.",
    functions: [
      {
        name: "process_verified_packets",
        description: "Processes packets with verified signatures.",
        inputs: [
          {
            name: "verified_packets: Vec<Packet>",
            description: "A vector of packets with verified signatures.",
          },
        ],
        outputs: ["Result<(), BankingError>"],
        codeSnippet: {
          language: "rust",
          code: "fn process_verified_packets(verified_packets: Vec<Packet>) -> Result<(), BankingError> {\n    // Process transactions\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/repair/repair_service.rs",
    role: "Handles repairing of missing or corrupted data, ensuring all transactions are accounted for.",
    functions: [
      {
        name: "repair_missing_signatures",
        description: "Repairs transactions with missing or invalid signatures.",
        inputs: [
          {
            name: "slots: &[Slot]",
            description: "A slice of slots to inspect for missing signatures.",
          },
        ],
        outputs: ["Result<(), RepairError>"],
        codeSnippet: {
          language: "rust",
          code: "fn repair_missing_signatures(slots: &[Slot]) -> Result<(), RepairError> {\n    // Repair logic\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-client/src/lib.rs",
    role: "Provides client interfaces to interact with the banking stage, including submitting transactions.",
    functions: [
      {
        name: "submit_verified_transaction",
        description: "Submits a transaction with a verified signature to the banking stage.",
        inputs: [
          {
            name: "transaction: Transaction",
            description: "A transaction with a verified signature.",
          },
        ],
        outputs: ["Result<Signature, ClientError>"],
        codeSnippet: {
          language: "rust",
          code: "fn submit_verified_transaction(transaction: Transaction) -> Result<Signature, ClientError> {\n    // Submission logic\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-interface/src/lib.rs",
    role: "Defines interfaces for bank interactions, facilitating transaction processing and signature verification.",
    functions: [
      {
        name: "interface_verify_signature",
        description: "Interface method to verify a transaction's signature.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "A reference to the transaction to verify.",
          },
        ],
        outputs: ["bool"],
        codeSnippet: {
          language: "rust",
          code: "fn interface_verify_signature(transaction: &Transaction) -> bool {\n    // Verification logic\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-server/src/lib.rs",
    role: "Manages server-side operations for the banking stage, including handling verified transactions.",
    functions: [
      {
        name: "handle_verified_transaction",
        description: "Handles a transaction with a verified signature.",
        inputs: [
          {
            name: "transaction: Transaction",
            description: "A transaction with a verified signature.",
          },
        ],
        outputs: ["Result<(), ServerError>"],
        codeSnippet: {
          language: "rust",
          code: "fn handle_verified_transaction(transaction: Transaction) -> Result<(), ServerError> {\n    // Handling logic\n}",
        },
      },
    ],
  },
  {
    filePath: "builtins/src/lib.rs",
    role: "Provides built-in programs and functions, including those for signature verification.",
    functions: [
      {
        name: "builtin_verify_signature",
        description: "Verifies a signature using built-in methods.",
        inputs: [
          {
            name: "message: &[u8]",
            description: "The message that was signed.",
          },
          {
            name: "signature: &Signature",
            description: "The signature to verify.",
          },
          {
            name: "public_key: &Pubkey",
            description: "The public key corresponding to the private key that signed the message.",
          },
        ],
        outputs: ["bool"],
        codeSnippet: {
          language: "rust",
          code: "fn builtin_verify_signature(message: &[u8], signature: &Signature, public_key: &Pubkey) -> bool {\n    // Verification logic\n}",
        },
      },
    ],
  },
  {
    filePath: "compute-budget/src/lib.rs",
    role: "Manages compute budgets for transactions, ensuring signature verification stays within limits.",
    functions: [
      {
        name: "check_signature_compute_budget",
        description: "Checks if signature verification is within the compute budget.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to check.",
          },
        ],
        outputs: ["Result<(), BudgetError>"],
        codeSnippet: {
          language: "rust",
          code: "fn check_signature_compute_budget(transaction: &Transaction) -> Result<(), BudgetError> {\n    // Budget checking logic\n}",
        },
      },
    ],
  },
  {
    filePath: "compute-budget-instruction/src/lib.rs",
    role: "Defines instructions related to compute budgets, including those affecting signature verification.",
    functions: [
      {
        name: "create_signature_budget_instruction",
        description: "Creates an instruction to set compute budget for signature verification.",
        inputs: [
          {
            name: "budget: u64",
            description: "The compute budget to allocate.",
          },
        ],
        outputs: ["Instruction"],
        codeSnippet: {
          language: "rust",
          code: "fn create_signature_budget_instruction(budget: u64) -> Instruction {\n    // Instruction creation logic\n}",
        },
      },
    ],
  },
  {
    filePath: "poh/src/lib.rs",
    role: "Manages Proof of History (PoH), integrating with signature verification for transaction ordering.",
    functions: [
      {
        name: "record_signature_with_poh",
        description: "Records a signature in the PoH sequence.",
        inputs: [
          {
            name: "signature: &Signature",
            description: "The signature to record.",
          },
        ],
        outputs: ["Result<(), PoHError>"],
        codeSnippet: {
          language: "rust",
          code: "fn record_signature_with_poh(signature: &Signature) -> Result<(), PoHError> {\n    // Recording logic\n}",
        },
      },
    ],
  },
  {
    filePath: "program-runtime/src/lib.rs",
    role: "Executes programs within the Solana runtime, handling signature verification as part of transaction execution.",
    functions: [
      {
        name: "execute_with_signature_check",
        description: "Executes a program after verifying the transaction's signature.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to execute.",
          },
        ],
        outputs: ["Result<(), RuntimeError>"],
        codeSnippet: {
          language: "rust",
          code: "fn execute_with_signature_check(transaction: &Transaction) -> Result<(), RuntimeError> {\n    // Execution logic\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime/src/lib.rs",
    role: "Provides the core runtime environment, including facilities for signature verification.",
    functions: [
      {
        name: "runtime_verify_signature",
        description: "Verifies a transaction's signature within the runtime.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to verify.",
          },
        ],
        outputs: ["bool"],
        codeSnippet: {
          language: "rust",
          code: "fn runtime_verify_signature(transaction: &Transaction) -> bool {\n    // Verification logic\n}",
        },
      },
    ],
  },
  {
    filePath: "fee/src/lib.rs",
    role: "Calculates transaction fees, potentially adjusting based on signature verification complexity.",
    functions: [
      {
        name: "calculate_fee_with_signature",
        description: "Calculates the fee for a transaction, considering signature verification costs.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to calculate the fee for.",
          },
        ],
        outputs: ["u64"],
        codeSnippet: {
          language: "rust",
          code: "fn calculate_fee_with_signature(transaction: &Transaction) -> u64 {\n    // Fee calculation logic\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime-transaction/src/lib.rs",
    role: "Handles transactions within the runtime, including signature verification steps.",
    functions: [
      {
        name: "process_transaction_signature",
        description: "Processes the signature of a transaction within the runtime.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to process.",
          },
        ],
        outputs: ["Result<(), TransactionError>"],
        codeSnippet: {
          language: "rust",
          code: "fn process_transaction_signature(transaction: &Transaction) -> Result<(), TransactionError> {\n    // Processing logic\n}",
        },
      },
    ],
  },
  {
    filePath: "merkle-tree/src/lib.rs",
    role: "Implements Merkle tree structures, which can be used to verify batches of signatures efficiently.",
    functions: [
      {
        name: "verify_signature_merkle_proof",
        description: "Verifies a signature using a Merkle proof.",
        inputs: [
          {
            name: "proof: &MerkleProof",
            description: "The Merkle proof for the signature.",
          },
          {
            name: "root: &Hash",
            description: "The Merkle root hash.",
          },
        ],
        outputs: ["bool"],
        codeSnippet: {
          language: "rust",
          code: "fn verify_signature_merkle_proof(proof: &MerkleProof, root: &Hash) -> bool {\n    // Verification logic\n}",
        },
      },
    ],
  },
];

export { signatureVerifyFiles };

const bankingStageFiles = [
  {
    filePath: "core/src/banking_stage/banking_stage.rs",
    role: "Implements the core logic of the Banking Stage, processing verified transactions and updating the ledger state.",
    functions: [
      {
        name: "process_transactions",
        description: "Processes a batch of verified transactions.",
        inputs: [
          {
            name: "transactions: &[SanitizedTransaction]",
            description: "A slice of sanitized transactions to process.",
          },
        ],
        outputs: ["Result<(), BankingError>"],
        codeSnippet: {
          language: "rust",
          code: "fn process_transactions(transactions: &[SanitizedTransaction]) -> Result<(), BankingError> {\n    // Transaction processing logic\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-client/src/lib.rs",
    role: "Provides client interfaces for interacting with the banking stage, facilitating transaction submission and state queries.",
    functions: [
      {
        name: "submit_transaction",
        description: "Submits a transaction to the banking stage for processing.",
        inputs: [
          {
            name: "transaction: Transaction",
            description: "The transaction to be submitted.",
          },
        ],
        outputs: ["Result<Signature, ClientError>"],
        codeSnippet: {
          language: "rust",
          code: "fn submit_transaction(transaction: Transaction) -> Result<Signature, ClientError> {\n    // Submission logic\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-interface/src/lib.rs",
    role: "Defines the interface and traits for the banking components, ensuring modularity and abstraction.",
    functions: [
      {
        name: "TransactionProcessor",
        description: "Trait defining the interface for processing transactions.",
        inputs: [],
        outputs: [],
        codeSnippet: {
          language: "rust",
          code: "trait TransactionProcessor {\n    fn process_transaction(&self, transaction: &Transaction) -> Result<(), ProcessingError>;\n}",
        },
      },
    ],
  },
  {
    filePath: "banks-server/src/lib.rs",
    role: "Hosts the server-side implementation of the banking stage, managing incoming requests and coordinating processing.",
    functions: [
      {
        name: "handle_client_request",
        description: "Handles incoming client requests for transaction processing.",
        inputs: [
          {
            name: "request: ClientRequest",
            description: "The client's request to process.",
          },
        ],
        outputs: ["Result<ServerResponse, ServerError>"],
        codeSnippet: {
          language: "rust",
          code: "fn handle_client_request(request: ClientRequest) -> Result<ServerResponse, ServerError> {\n    // Request handling logic\n}",
        },
      },
    ],
  },
  {
    filePath: "builtins/src/lib.rs",
    role: "Contains built-in programs and utilities used during transaction processing in the banking stage.",
    functions: [
      {
        name: "execute_builtin_program",
        description: "Executes a built-in program as part of transaction processing.",
        inputs: [
          {
            name: "program_id: &Pubkey",
            description: "The ID of the built-in program to execute.",
          },
          {
            name: "instruction_data: &[u8]",
            description: "The instruction data for the program.",
          },
        ],
        outputs: ["Result<(), ProgramError>"],
        codeSnippet: {
          language: "rust",
          code: "fn execute_builtin_program(program_id: &Pubkey, instruction_data: &[u8]) -> Result<(), ProgramError> {\n    // Execution logic\n}",
        },
      },
    ],
  },
  {
    filePath: "compute-budget/src/lib.rs",
    role: "Manages compute budget allocation for transactions, ensuring fair resource distribution.",
    functions: [
      {
        name: "allocate_compute_budget",
        description: "Allocates compute budget for a transaction.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction for which to allocate compute budget.",
          },
        ],
        outputs: ["Result<(), BudgetError>"],
        codeSnippet: {
          language: "rust",
          code: "fn allocate_compute_budget(transaction: &Transaction) -> Result<(), BudgetError> {\n    // Allocation logic\n}",
        },
      },
    ],
  },
  {
    filePath: "compute-budget-instruction/src/lib.rs",
    role: "Defines instructions related to compute budget management, allowing transactions to request specific compute resources.",
    functions: [
      {
        name: "create_compute_budget_instruction",
        description: "Creates an instruction to set compute budget for a transaction.",
        inputs: [
          {
            name: "budget: u64",
            description: "The compute budget to allocate.",
          },
        ],
        outputs: ["Instruction"],
        codeSnippet: {
          language: "rust",
          code: "fn create_compute_budget_instruction(budget: u64) -> Instruction {\n    // Instruction creation logic\n}",
        },
      },
    ],
  },
  {
    filePath: "program-runtime/src/lib.rs",
    role: "Provides the runtime environment for executing programs within transactions, handling state transitions and validations.",
    functions: [
      {
        name: "execute_program",
        description: "Executes a program within the transaction's context.",
        inputs: [
          {
            name: "program_id: &Pubkey",
            description: "The ID of the program to execute.",
          },
          {
            name: "accounts: &[AccountInfo]",
            description: "The accounts involved in the execution.",
          },
          {
            name: "instruction_data: &[u8]",
            description: "The instruction data for the program.",
          },
        ],
        outputs: ["Result<(), ProgramError>"],
        codeSnippet: {
          language: "rust",
          code: "fn execute_program(program_id: &Pubkey, accounts: &[AccountInfo], instruction_data: &[u8]) -> Result<(), ProgramError> {\n    // Execution logic\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime/src/lib.rs",
    role: "Implements the overall runtime logic, coordinating between different stages and managing global state.",
    functions: [
      {
        name: "process_runtime_event",
        description: "Processes an event within the runtime environment.",
        inputs: [
          {
            name: "event: RuntimeEvent",
            description: "The event to process.",
          },
        ],
        outputs: ["Result<(), RuntimeError>"],
        codeSnippet: {
          language: "rust",
          code: "fn process_runtime_event(event: RuntimeEvent) -> Result<(), RuntimeError> {\n    // Event processing logic\n}",
        },
      },
    ],
  },
  {
    filePath: "fee/src/lib.rs",
    role: "Calculates and manages transaction fees, ensuring proper fee deduction and distribution.",
    functions: [
      {
        name: "calculate_transaction_fee",
        description: "Calculates the fee for a given transaction.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to calculate the fee for.",
          },
        ],
        outputs: ["u64"],
        codeSnippet: {
          language: "rust",
          code: "fn calculate_transaction_fee(transaction: &Transaction) -> u64 {\n    // Fee calculation logic\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime-transaction/src/lib.rs",
    role: "Handles transaction-specific runtime operations, including signature verification and instruction processing.",
    functions: [
      {
        name: "verify_transaction_signature",
        description: "Verifies the signature of a transaction.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to verify.",
          },
        ],
        outputs: ["Result<(), SignatureError>"],
        codeSnippet: {
          language: "rust",
          code: "fn verify_transaction_signature(transaction: &Transaction) -> Result<(), SignatureError> {\n    // Verification logic\n}",
        },
      },
    ],
  },
  {
    filePath: "cost-model/src/lib.rs",
    role: "Analyzes and models the cost of transactions, aiding in fee calculation and resource allocation.",
    functions: [
      {
        name: "estimate_transaction_cost",
        description: "Estimates the cost of a transaction based on its contents.",
        inputs: [
          {
            name: "transaction: &Transaction",
            description: "The transaction to estimate the cost for.",
          },
        ],
        outputs: ["u64"],
        codeSnippet: {
          language: "rust",
          code: "fn estimate_transaction_cost(transaction: &Transaction) -> u64 {\n    // Cost estimation logic\n}",
        },
      },
    ],
  },
];

export { bankingStageFiles };


const broadcastStageFiles = [
  {
    filePath: "core/src/broadcast_stage/broadcast_stage.rs",
    role: "Implements the broadcast stage responsible for distributing processed entries to peers or validators.",
    functions: [
      {
        name: "run_broadcast_stage",
        description: "Initializes and runs the main broadcast loop.",
        inputs: [
          { name: "receiver: Receiver<Entry>", description: "Receives entries to be broadcasted." },
        ],
        outputs: ["()"],
        codeSnippet: {
          language: "rust",
          code: "fn run_broadcast_stage(receiver: Receiver<Entry>) {\n    // Start broadcast loop\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/broadcast_stage/standard_broadcast_run.rs",
    role: "Provides the standard broadcast implementation used by default in the broadcast stage.",
    functions: [
      {
        name: "standard_broadcast",
        description: "Performs standard broadcasting logic to all peer validators.",
        inputs: [
          { name: "entry: &Entry", description: "A reference to the ledger entry to broadcast." },
        ],
        outputs: ["Result<(), BroadcastError>"],
        codeSnippet: {
          language: "rust",
          code: "fn standard_broadcast(entry: &Entry) -> Result<(), BroadcastError> {\n    // Broadcasting logic\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/broadcast_stage/cluster_nodes.rs",
    role: "Manages the set of known cluster nodes and determines which peers to broadcast to.",
    functions: [
      {
        name: "get_broadcast_peers",
        description: "Returns a list of peers to broadcast a given entry to.",
        inputs: [
          { name: "entry: &Entry", description: "The entry being processed." },
        ],
        outputs: ["Vec<Pubkey>"],
        codeSnippet: {
          language: "rust",
          code: "fn get_broadcast_peers(entry: &Entry) -> Vec<Pubkey> {\n    // Peer selection logic\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/broadcast_stage/duplicate_detector.rs",
    role: "Detects and avoids re-broadcasting duplicate entries.",
    functions: [
      {
        name: "is_duplicate",
        description: "Checks if the entry has already been broadcasted.",
        inputs: [
          { name: "entry_hash: &Hash", description: "The hash of the entry to check." },
        ],
        outputs: ["bool"],
        codeSnippet: {
          language: "rust",
          code: "fn is_duplicate(entry_hash: &Hash) -> bool {\n    // Duplicate detection logic\n}",
        },
      },
    ],
  },
  {
    filePath: "runtime/src/broadcast_utils.rs",
    role: "Contains broadcast utility functions for hashing, logging, and data transformation.",
    functions: [
      {
        name: "hash_entry_for_broadcast",
        description: "Hashes an entry for tracking and broadcast integrity.",
        inputs: [
          { name: "entry: &Entry", description: "The entry to hash." },
        ],
        outputs: ["Hash"],
        codeSnippet: {
          language: "rust",
          code: "fn hash_entry_for_broadcast(entry: &Entry) -> Hash {\n    // Entry hashing logic\n}",
        },
      },
    ],
  },
  {
    filePath: "poh/src/poh_recorder.rs",
    role: "Integrates PoH with broadcast timing, ensuring proper sequencing of broadcasted entries.",
    functions: [
      {
        name: "record_broadcast_slot",
        description: "Records the slot number when broadcasting entries.",
        inputs: [
          { name: "slot: Slot", description: "The slot to record for broadcast." },
        ],
        outputs: ["Result<(), PoHError>"],
        codeSnippet: {
          language: "rust",
          code: "fn record_broadcast_slot(slot: Slot) -> Result<(), PoHError> {\n    // Slot recording logic\n}",
        },
      },
    ],
  },
  {
    filePath: "network/src/tpu_connection.rs",
    role: "Handles network connections to other TPU nodes during broadcast.",
    functions: [
      {
        name: "send_entry_to_peer",
        description: "Sends a ledger entry to a specific peer node.",
        inputs: [
          { name: "entry: &Entry", description: "The entry to send." },
          { name: "peer: &Pubkey", description: "The peer to send the entry to." },
        ],
        outputs: ["Result<(), NetworkError>"],
        codeSnippet: {
          language: "rust",
          code: "fn send_entry_to_peer(entry: &Entry, peer: &Pubkey) -> Result<(), NetworkError> {\n    // Send logic\n}",
        },
      },
    ],
  },
  {
    filePath: "core/src/broadcast_stage/metrics.rs",
    role: "Captures metrics for broadcast performance and diagnostics.",
    functions: [
      {
        name: "record_broadcast_metrics",
        description: "Records metrics about a broadcasted entry.",
        inputs: [
          { name: "entry: &Entry", description: "The broadcasted entry." },
          { name: "peers: usize", description: "Number of peers the entry was sent to." },
        ],
        outputs: ["()"],
        codeSnippet: {
          language: "rust",
          code: "fn record_broadcast_metrics(entry: &Entry, peers: usize) {\n    // Metrics logic\n}",
        },
      },
    ],
  },
];

export { broadcastStageFiles };


// accountsDbStageFiles.ts


const accountsDbStageFiles = [
  {
    filePath: "runtime/src/accounts_db.rs",
    role: "Implements the core logic for storing and retrieving account state, handling persistence, caching, and storage structures.",
    functions: [
      {
        name: "store_account",
        description: "Stores an account's data in the Accounts DB.",
        inputs: [
          { name: "pubkey: &Pubkey", description: "The public key of the account." },
          { name: "account: &Account", description: "The account data to store." },
        ],
        outputs: ["Result<(), AccountsDbError>"],
        codeSnippet: {
          language: "rust",
          code: "fn store_account(pubkey: &Pubkey, account: &Account) -> Result<(), AccountsDbError> {\n    // Store logic\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_cache.rs",
    role: "Manages the in-memory cache for faster account retrieval before hitting persistent storage.",
    functions: [
      {
        name: "load_cached_account",
        description: "Attempts to load an account from the in-memory cache.",
        inputs: [
          { name: "pubkey: &Pubkey", description: "The public key of the account." },
        ],
        outputs: ["Option<Account>"],
        codeSnippet: {
          language: "rust",
          code: "fn load_cached_account(pubkey: &Pubkey) -> Option<Account> {\n    // Cache lookup\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_index.rs",
    role: "Maintains an index for account locations in storage or cache, mapping keys to storage entries.",
    functions: [
      {
        name: "get_account_location",
        description: "Gets the location metadata of an account in storage.",
        inputs: [
          { name: "pubkey: &Pubkey", description: "The public key of the account." },
        ],
        outputs: ["Option<AccountLocation>"],
        codeSnippet: {
          language: "rust",
          code: "fn get_account_location(pubkey: &Pubkey) -> Option<AccountLocation> {\n    // Index lookup\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_background_service.rs",
    role: "Runs background tasks like cleaning, flushing, and purging old account data.",
    functions: [
      {
        name: "clean_accounts_background",
        description: "Cleans stale or outdated account entries in the background.",
        inputs: [],
        outputs: ["()"],
        codeSnippet: {
          language: "rust",
          code: "fn clean_accounts_background() {\n    // Cleaning logic\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_db_storage.rs",
    role: "Handles low-level file-backed storage of account data, including appending and reading.",
    functions: [
      {
        name: "append_account_to_storage",
        description: "Appends an account to persistent storage files.",
        inputs: [
          { name: "account: &Account", description: "The account data to store." },
        ],
        outputs: ["Result<StorageOffset, StorageError>"],
        codeSnippet: {
          language: "rust",
          code: "fn append_account_to_storage(account: &Account) -> Result<StorageOffset, StorageError> {\n    // Append logic\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_db_scan.rs",
    role: "Implements scanning and filtering over accounts for rent collection, snapshots, and pruning.",
    functions: [
      {
        name: "scan_accounts",
        description: "Scans all accounts and applies a filter operation.",
        inputs: [
          { name: "filter: F", description: "A closure that determines if an account matches." },
        ],
        outputs: ["Vec<Pubkey>"],
        codeSnippet: {
          language: "rust",
          code: "fn scan_accounts<F>(filter: F) -> Vec<Pubkey>\nwhere\n    F: Fn(&Account) -> bool,\n{\n    // Scanning logic\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_db_rewrites.rs",
    role: "Handles rewriting or consolidating account storage entries during compaction or snapshots.",
    functions: [
      {
        name: "rewrite_accounts_storage",
        description: "Rewrites the account storage file to optimize layout and size.",
        inputs: [],
        outputs: ["Result<(), RewriteError>"],
        codeSnippet: {
          language: "rust",
          code: "fn rewrite_accounts_storage() -> Result<(), RewriteError> {\n    // Rewrite logic\n}"
        },
      },
    ],
  },
  {
    filePath: "runtime/src/accounts_partition.rs",
    role: "Provides utilities to partition account data for parallel access or storage.",
    functions: [
      {
        name: "partition_accounts",
        description: "Splits account sets for parallel operations.",
        inputs: [
          { name: "accounts: Vec<Account>", description: "The set of accounts to partition." },
        ],
        outputs: ["Vec<Vec<Account>>"],
        codeSnippet: {
          language: "rust",
          code: "fn partition_accounts(accounts: Vec<Account>) -> Vec<Vec<Account>> {\n    // Partition logic\n}"
        },
      },
    ],
  },
];

export { accountsDbStageFiles };



const pohServicesStageFiles = [
  {
    filePath: "core/src/poh_service.rs",
    role: "Manages the Proof of History service, generating and recording PoH hashes.",
    functions: [
      {
        name: "start_poh_service",
        description: "Initializes and starts the PoH service thread.",
        inputs: [
          { name: "config: PohServiceConfig", description: "Configuration parameters for the PoH service." }
        ],
        outputs: ["JoinHandle<()>"],
        codeSnippet: {
          language: "rust",
          code: "fn start_poh_service(config: PohServiceConfig) -> JoinHandle<()> {\n    // Initialization logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/poh_recorder.rs",
    role: "Records PoH hashes and manages the recording of entries.",
    functions: [
      {
        name: "record",
        description: "Records a new PoH hash entry.",
        inputs: [
          { name: "entry: Entry", description: "The entry to be recorded." }
        ],
        outputs: ["Result<()>"],
        codeSnippet: {
          language: "rust",
          code: "fn record(entry: Entry) -> Result<()> {\n    // Recording logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/entry.rs",
    role: "Defines the structure of entries used in the PoH mechanism.",
    functions: [
      {
        name: "create_entry",
        description: "Creates a new entry with the given data.",
        inputs: [
          { name: "num_hashes: u64", description: "Number of hashes since the last entry." },
          { name: "hash: Hash", description: "The PoH hash." },
          { name: "transactions: Vec<Transaction>", description: "Transactions included in the entry." }
        ],
        outputs: ["Entry"],
        codeSnippet: {
          language: "rust",
          code: "fn create_entry(num_hashes: u64, hash: Hash, transactions: Vec<Transaction>) -> Entry {\n    // Entry creation logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/entry_writer.rs",
    role: "Handles writing entries to the ledger.",
    functions: [
      {
        name: "write_entry",
        description: "Writes an entry to the ledger.",
        inputs: [
          { name: "entry: &Entry", description: "The entry to write." }
        ],
        outputs: ["Result<()>"],
        codeSnippet: {
          language: "rust",
          code: "fn write_entry(entry: &Entry) -> Result<()> {\n    // Writing logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/entry_reader.rs",
    role: "Handles reading entries from the ledger.",
    functions: [
      {
        name: "read_entry",
        description: "Reads an entry from the ledger.",
        inputs: [
          { name: "position: u64", description: "Position in the ledger to read from." }
        ],
        outputs: ["Result<Entry>"],
        codeSnippet: {
          language: "rust",
          code: "fn read_entry(position: u64) -> Result<Entry> {\n    // Reading logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/ledger.rs",
    role: "Manages the ledger where entries are stored.",
    functions: [
      {
        name: "append_entry",
        description: "Appends an entry to the ledger.",
        inputs: [
          { name: "entry: Entry", description: "The entry to append." }
        ],
        outputs: ["Result<()>"],
        codeSnippet: {
          language: "rust",
          code: "fn append_entry(entry: Entry) -> Result<()> {\n    // Append logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/poh.rs",
    role: "Implements the core Proof of History hashing mechanism.",
    functions: [
      {
        name: "hash",
        description: "Generates a PoH hash.",
        inputs: [
          { name: "data: &[u8]", description: "Data to hash." }
        ],
        outputs: ["Hash"],
        codeSnippet: {
          language: "rust",
          code: "fn hash(data: &[u8]) -> Hash {\n    // Hashing logic\n}"
        }
      }
    ]
  },
  {
    filePath: "core/src/poh_config.rs",
    role: "Defines configuration parameters for the PoH service.",
    functions: [
      {
        name: "default_config",
        description: "Provides default configuration for the PoH service.",
        inputs: [],
        outputs: ["PohServiceConfig"],
        codeSnippet: {
          language: "rust",
          code: "fn default_config() -> PohServiceConfig {\n    // Default configuration\n}"
        }
      }
    ]
  }
];

export { pohServicesStageFiles };