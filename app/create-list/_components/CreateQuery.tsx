"use client";
import React, { useState } from "react";
import { useAnimate } from "framer-motion";
import { Search } from "lucide-react";
import { ChatSession } from "@/configs/AIModel";
import ShowResults from "./ShowResults";

interface CreateQueryProps {
  onSearchComplete: (response: string) => void;
}

const PROMPT =
  ", On the basis of description please give me response in json format that how do i complete the given task from step 1 to the end with title and description. The title should have what to do and the description should tell how to complete the task in the title. If the description is long, then make it in points. Start json with step";

const CreateQuery = ({ onSearchComplete }: CreateQueryProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const [scope, animate] = useAnimate();

  const handleSearchClick = async () => {
    console.log("Input: " + userInput);
    await animate("#target", { y: -350 }, { duration: 0.2 });
    const result = await ChatSession.sendMessage(
      "Description:" + userInput + PROMPT
    );
    const finalResult = result.response.text();
    console.log(finalResult);

    onSearchComplete(finalResult);

    await animate("#target", { y: 0 });
  };

  return (
    <div ref={scope} className=" flex justify-center items-center py-4 px-5">
      <div
        id="target"
        className="w-[900px] flex items-center gap-5 justify-center"
      >
        <input
          type="text"
          className="py-6 px-6 w-full border-black border rounded-lg text-2xl"
          placeholder="Ask AI"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="cursor-pointer" onClick={() => handleSearchClick()}>
          <Search className="hover:text-blue-500 w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default CreateQuery;
