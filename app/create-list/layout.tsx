import React from "react";

const CreateListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="my-5 h-screen w-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default CreateListLayout;
