import React, { ReactNode } from "react";

interface ShowResultsProps {
  response?: ReactNode;
}

// export default function ShowResults({ response }: ShowResultsProps) {
//   return <div>{response}</div>;
// }

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
  if (!response) return <div>Start Asking AI</div>;

  const task = JSON.parse(String(response));
  console.log(task);
  return (
    <div className="w-[700px]">
      {task.step.map((step: any, index: number) => (
        <div key={index}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowResults;
