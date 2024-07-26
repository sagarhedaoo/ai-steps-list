"use client";
import React, { useState } from "react";
import { useAnimate } from "framer-motion";
import { Search } from "lucide-react";
import { ChatSession } from "@/configs/AIModel";
import OpenAI from "openai";
import { motion } from "framer-motion";
import { PROMPT, PROMPT2 } from "@/utils/prompts";

interface CreateQueryProps {
  onSearchComplete: (response: string) => void;
}

const CreateQuery = ({ onSearchComplete }: CreateQueryProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const [scope, animate] = useAnimate();
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const Dalle = async ({ prompt }: { prompt: string }) => {
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = image.data[0].url;
    console.log(imageUrl);
  };

  const handleSearchClick = async () => {
    console.log("Input: " + userInput);
    await animate("#target", { y: -350 }, { duration: 0.2 });
    const result = await ChatSession.sendMessage(
      PROMPT + "Description: " + userInput + PROMPT2
    );

    const finalResult = result.response.text();
    console.log(finalResult);

    if (finalResult) {
      // await Dalle({ prompt: userInput });
      onSearchComplete(finalResult);
    } else {
      await animate("#target", { y: 0 });
    }

    await animate("#target", { y: 0 });

    // Photo image code here
  };

  return (
    <motion.div
      ref={scope}
      className="flex flex-col justify-center items-center gap-4"
    >
      <h3
        id="target"
        className="bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] via-[#fcb045] bg-clip-text text-blue-400 text-8xl font-roboto mt-5"
      >
        ASK AI
      </h3>
      <div id="target" className=" flex justify-center items-center py-4 px-5 ">
        {/* <div className="w-[900px] flex items-center justify-center bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] via-[#fcb045] rounded-2xl p-1"> */}
        <div className="w-[900px] flex items-center justify-center bg-blue-400 rounded-2xl p-1">
          <input
            type="text"
            className="py-6 px-6 w-full border-black border rounded-2xl text-2xl"
            placeholder="What are you planning to do today?"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
          />
          <button
            className="cursor-pointer hover:bg-blue-200 hover:rounded-2xl mx-2 p-3"
            onClick={() => handleSearchClick()}
          >
            <Search className=" w-10 h-10 " />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateQuery;
