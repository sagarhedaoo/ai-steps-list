"use client";
import React, { useState } from "react";
import CreateQuery from "./_components/CreateQuery";
import ShowResults from "./_components/ShowResults";

const page = () => {
  const [response, setResponse] = useState("");
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <CreateQuery onSearchComplete={setResponse} />
      <ShowResults response={response} />
    </div>
  );
};

export default page;
