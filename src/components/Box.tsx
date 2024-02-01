import React from "react";
const Box = () => {
  return (
    <div className="max-md:text-center grid md:grid-cols-3 w-full max-w-[900px] gap-3 mx-auto">
      {" "}
      {/* Box 1 */}{" "}
      <div className="w-full rounded-md border capitalize shadow-sm bg-gradient-to-br from-green-100 min-h-[150px] flex flex-col items-start justify-center to-blue-100 text-black p-4 font-semibold text-xl">
        🤔 Ask any question and{" "}
        <span className="text-blue-700 font-bold flex">
          get correct answers🚀
        </span>
      </div>{" "}
      {/* Box 2 */}{" "}
      <div className="max-md:text-center relative w-full rounded-md border capitalize shadow-sm bg-gradient-to-br from-green-100 min-h-[150px] flex flex-col items-start justify-center to-blue-100 text-black p-4 font-semibold text-xl">
        📈Upload Image And{" "}
        <span className="text-red-700 font-bold flex">
          get detail explanation 🐤
        </span>
        <div className="absolute text-xs text-black/30 bottom-2 right-2">
          registration required
        </div>
      </div>{" "}
      {/* Box 3 */}{" "}
      <div className="min-md:text-center relative w-full rounded-md border capitalize bg-[url('/panda.png')] bg-no-repeat bg-cover shadow-sm min-h-[150px] flex flex-col items-start justify-center p-4 font-semibold text-xl">
        <span className="bg-gradient-to-b from-sky-200 font-bold flex w-fit">
          Generate An image
        </span>
        <span className="bg-gradient-to-t text-white from-purple-400 font-bold flex w-git">
          that fits Your imagination
        </span>
        <div className="absolute text-xs text-yellow-200 font-medium bottom-2 right-2 flex items-center h-8">
          <span className="text-lg">👑</span>
          <p className="h-full flex pt-3">Premium</p>
        </div>
      </div>{" "}
    </div>
  );
};
export default Box;
