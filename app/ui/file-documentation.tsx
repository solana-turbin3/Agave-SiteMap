interface CodeSnippet {
    code: string;
    language?: string;
}

interface FunctionDoc {
    name: string;
    description: string;
    inputs: { name: string; description: string; }[];
    outputs: string[];
    codeSnippet?: CodeSnippet;
}

interface FileDocumentationProps {
    filePath: string;
    role: string;
    functions: FunctionDoc[];
}

export function FileDocumentation({ filePath, role, functions }: FileDocumentationProps) {
    const fileId = filePath.replace(/\//g, '-');
    
    return (
        <div className="space-y-4 p-6 border-t-2 border-gray-200">
            <h3 className="text-xl font-semibold" id={fileId}>{filePath}</h3>
            
            <div className="space-y-2">
                <h4 className="font-bold">Role:</h4>
                <p className="pl-4">{role}</p>
            </div>

            <div className="space-y-2">
                <h4 className="font-bold">Key Functions:</h4>
                {functions.map((func, index) => {
                    const functionId = `${fileId}-${func.name}`;
                    return (
                        <div key={index} className="pl-4 space-y-2">
                            <p className="font-bold" id={functionId}>Function: {func.name}</p>
                            <div className="pl-4 space-y-2">
                                <p>
                                    <span className="font-bold">Description:</span> {func.description}
                                </p>
                                
                                <div>
                                    <p className="font-bold">Inputs:</p>
                                    {func.inputs.map((input, i) => (
                                        <p key={i} className="pl-4">
                                            {input.name} - {input.description}
                                        </p>
                                    ))}
                                </div>
                                
                                <div>
                                    <p className="font-bold">Outputs:</p>
                                    {func.outputs.map((output, i) => (
                                        <p key={i} className="pl-4">{output}</p>
                                    ))}
                                </div>
                                
                                {func.codeSnippet && (
                                    <div>
                                        <p className="font-bold">Code Snippet:</p>
                                        <pre className="bg-gray-100 p-2 rounded-md mt-2 overflow-x-auto whitespace-pre-wrap break-words max-w-full">
                                            <code className={func.codeSnippet.language}>
                                                {func.codeSnippet.code}
                                            </code>
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
} 