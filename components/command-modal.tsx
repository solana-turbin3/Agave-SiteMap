import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

export interface Step {
  title: string;
  description: string;
  command: string | (() => Promise<string>);
  isAsync?: boolean;
}

interface CommandModalProps {
  isOpen: boolean;
  onClose: () => void;
  steps: Step[];
}

export default function CommandModal({ isOpen, onClose, steps }: CommandModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [currentCommand, setCurrentCommand] = useState<string>(steps[0].command as string);

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNext = async () => {
    if (isLastStep) {
      setCurrentStepIndex(0);
      setCurrentCommand(steps[0].command as string);
      onClose();
    } else {
      const nextStep = steps[currentStepIndex + 1];
      if (nextStep.isAsync && typeof nextStep.command === 'function') {
        const result = await nextStep.command();
        setCurrentCommand(result);
      } else if (typeof nextStep.command === 'string') {
        setCurrentCommand(nextStep.command);
      }
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <ClipboardDocumentIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  Step {currentStepIndex + 1}: {currentStep.title}
                </Dialog.Title>
                <p className="mt-2 text-sm text-gray-500">
                  {currentStep.description}
                </p>
                <div className="mt-4">
                  <div className="relative">
                    <pre className="mt-2 rounded-lg bg-gray-900 p-4 text-sm text-gray-100 overflow-x-auto max-h-[400px] overflow-y-auto text-left">
                      <code>{currentCommand}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(currentCommand)}
                      className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <span className="text-green-400 text-sm">Copied!</span>
                      ) : (
                        <ClipboardDocumentIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 flex gap-3">
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                {isLastStep ? 'Finish' : 'Next Step'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
} 