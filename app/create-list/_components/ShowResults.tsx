import React, { ReactNode } from "react";

interface ShowResultsProps {
  response?: ReactNode;
}

// export default function ShowResults({ response }: ShowResultsProps) {
//   return <div>{response}</div>;
// }

const ShowResults: React.FC<ShowResultsProps> = ({ response }) => {
  if (!response) return <div>Start Asking AI</div>;

  const task = JSON.parse(String(response));
  console.log(task);
  return <div>result here</div>;
};

export default ShowResults;
