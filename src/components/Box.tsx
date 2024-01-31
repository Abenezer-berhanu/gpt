import React from "react";
const Box = () => {
  return (
    <div className="flex w-full max-w-[900px] gap-3 mx-auto">
      {" "}
      {/* Box 1 */}{" "}
      <div className="w-full rounded-md border capitalize shadow-sm bg-gradient-to-br from-green-100 min-h-[150px] flex flex-col items-start justify-center to-blue-100 text-black p-4 font-semibold text-xl">
        🤔
        Ask any question and <span className="text-blue-700 font-bold flex">get correct answers🚀</span>
      </div>{" "}
      {/* Box 2 */}{" "}
      <div className="relative w-full rounded-md border capitalize shadow-sm bg-gradient-to-br from-green-100 min-h-[150px] flex flex-col items-start justify-center to-blue-100 text-black p-4 font-semibold text-xl">
        📈Upload Image And <span className="text-red-700 font-bold flex">get detail explanation 🐤</span>
        <div className="absolute text-xs text-black/30 bottom-2 right-2">registration required</div>
      </div>{" "}
      {/* Box 3 */}{" "}
      <div className="w-full rounded-md border shadow-sm bg-gradient-to-br from-green-100 min-h-[150px] flex items-center justify-center to-blue-100 text-black p-4 font-semibold text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>{" "}
    </div>
  );
};
export default Box;
