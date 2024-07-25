"use client";
import { Check, ChevronRight, Cross } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface ShowResultsProps {
  response?: ReactNode;
}

// {
//     "steps": [
//       {
//         "title": "Download and Install VS Code",
//         "description": "- Visit the official VS Code website: https://code.visualstudio.com/\n- Click on the \"Download for Windows\", \"Download for macOS\", or \"Download for Linux\" button based on your operating system.\n- Run the downloaded installer and follow the on-screen instructions to complete the installation."
//       },
//       {
//         "title": "Open VS Code",
//         "description": "Find the VS Code icon on your computer's desktop or start menu and launch it."
//       },
//     ]
//     }

const ShowResults: React.FC<ShowResultsProps> = ({ response }) => {
  const [openSteps, setOpenSteps] = useState<{ [key: number]: boolean }>({});
  if (!response) return <div>Start Asking AI</div>;

  const task = JSON.parse(String(response));
  console.log(task);

  const toggleStep = (index: number) => {
    setOpenSteps((prevOpenSteps) => ({
      ...prevOpenSteps,
      [index]: !prevOpenSteps[index],
    }));
  };

  return (
    <div className="w-[750px]">
      {task.step.map((step: any, index: number) => (
        <div
          key={index}
          className="border  border-black px-4 py-4 mb-3 rounded-lg"
        >
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <ChevronRight
                className={`cursor-pointer transform transition-transform ${
                  openSteps[index] ? "rotate-90" : ""
                }`}
                onClick={() => toggleStep(index)}
              />
              <h3 className="text-lg">{step.title}</h3>
            </div>
            <div>
              <Check className="cursor-pointer hover:text-green-500" />
            </div>
          </div>
          {openSteps[index] && <div className="mt-2">{step.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default ShowResults;
