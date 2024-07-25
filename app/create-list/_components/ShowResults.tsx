"use client";
import { Check, ChevronRight, Cross } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface ShowResultsProps {
  response?: ReactNode;
}

const ShowResults: React.FC<ShowResultsProps> = ({ response }) => {
  const [openSteps, setOpenSteps] = useState<{ [key: number]: boolean }>({});
  const [completedSteps, setCompletedSteps] = useState<{
    [key: number]: boolean;
  }>({});
  if (!response) return <div></div>;

  const task = JSON.parse(String(response));
  console.log(task);

  const toggleStep = (index: number) => {
    setOpenSteps((prevOpenSteps) => ({
      ...prevOpenSteps,
      [index]: !prevOpenSteps[index],
    }));
  };

  const toggleComplete = (index: number) => {
    setCompletedSteps((prevCompletedSteps) => ({
      ...prevCompletedSteps,
      [index]: !prevCompletedSteps[index],
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
              <h3
                className={`text-lg ${
                  completedSteps[index]
                    ? "line-through decoration-green-500 decoration-2"
                    : ""
                }`}
              >
                {step.title}
              </h3>
            </div>
            <div>
              <Check
                className={`cursor-pointer hover:border  hover:rounded-full  hover:bg-slate-200 ${
                  completedSteps[index] ? "text-green-500" : ""
                }`}
                onClick={() => toggleComplete(index)}
              />
            </div>
          </div>
          {openSteps[index] && <div className="mt-2">{step.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default ShowResults;
