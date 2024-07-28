import React from "react";

const CreateListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div
        className=" h-screen w-screen flex justify-center items-center "
        style={{
          // backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CreateListLayout;
