import React from "react";

function Spinner() {
  return (
    <>
      <div className="h-screen bg-transparent">
        <div className="flex justify-center items-center h-full">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
