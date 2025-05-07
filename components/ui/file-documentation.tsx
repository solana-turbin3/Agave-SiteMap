interface CodeSnippet {
  code: string;
  language?: string;
}

interface FunctionDoc {
  name: string;
  description: string;
  inputs: { name: string; description: string }[];
  outputs: string[];
  codeSnippet?: CodeSnippet;
}

interface FileDocumentationProps {
  filePath: string;
  role: string;
  functions: FunctionDoc[];
}

export function FileDocumentation({
  filePath,
  role,
  functions,
}: FileDocumentationProps) {
  const fileId = filePath.replace(/\//g, "-");

  return (
    <div className="space-y-4 border-t-2 border-gray-200 p-6">
      <h3 className="text-xl font-semibold" id={fileId}>
        {filePath}
      </h3>

      <div className="space-y-2">
        <h4 className="font-bold">Role:</h4>
        <p className="pl-4">{role}</p>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold">Key Functions:</h4>
        {functions.map((func, index) => {
          const functionId = `${fileId}-${func.name}`;
          return (
            <div key={index} className="space-y-2 pl-4">
              <p className="font-bold" id={functionId}>
                Function: {func.name}
              </p>
              <div className="space-y-2 pl-4">
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {func.description}
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
                    <p key={i} className="pl-4">
                      {output}
                    </p>
                  ))}
                </div>

                {func.codeSnippet && (
                  <div>
                    <p className="font-bold">Code Snippet:</p>
                    <pre className="mt-2 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-gray-100 p-2">
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
