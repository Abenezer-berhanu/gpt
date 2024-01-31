"use client";
import { useRef } from "react";

import { askAiQuestion } from "@/actions/askAi";
import { useState } from "react";
import Spinner from "./Spinner";

function Form() {
  const formRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<any>(["text", "lorem ipsum dolor"]);
  const [questions, setQuestions] = useState(["ask", "what"]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!prompt) return;
      setQuestions((prev: string[]) => [...prev, prompt]);
      setLoading(true);
      const result: any = await askAiQuestion(prompt);
      //@ts-ignore
      formRef.current.reset();
      setLoading(false);
      setMessages((prev: any) => [...prev, result]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-between gap-5 h-full py-4 w-full">
      <div className="w-[90%] min-h-[500px] flex flex-col gap-3 mx-auto border border-black/10 py-10 items-center overflow-y-scroll no-scrollbar h-full max-h-[600px]">
        {messages.map((e: any, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col gap-4 max-w-[1200px] text-black/90 bg-gradient-to-br from-blue-100 to-red-100 border border-slate-300 shadow-md shadow-blue-300 rounded-md py-5 "
          >
            <p className=" mr-10 ml-auto w-fit bg-gradient-to-r from-green-900 to-green-950 rounded-full py-2 px-3 text-white">
              {questions[index]}
            </p>
            <p className="font-semibold indent-3 w-[90%] mx-auto">
              {" "}
              {"=>"} {e}
            </p>
          </div>
        ))}
      </div>
      {loading && <Spinner />}
      <form
        onSubmit={handleSubmit}
        className="flex mx-5 gap-4 h-16"
        ref={formRef}
      >
        <input
          type="text"
          name="prompt"
          onChange={(e: any) => setPrompt(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 outline-none rounded-md focus:outline-none h-full focus:ring-1 focus:ring-blue-200 max-w-[1000px] rounded-l-full"
          placeholder="Enter something..."
        />
        <button
          type="submit"
          typeof="submit"
          className="px-4 w-[300px] text-white bg-blue-500 rounded-sm  hover:bg-blue-600 focus:outline-none h-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
