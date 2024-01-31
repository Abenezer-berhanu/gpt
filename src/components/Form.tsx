"use client";
import { useRef } from "react";
import { askAiQuestion } from "@/actions/askAi";
import { useState } from "react";
import Spinner from "./Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function Form() {
  const formRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<any>([
    "Hello! How can I assist you today?",
  ]);
  const [questions, setQuestions] = useState(["Hello gpt"]);
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
    <div className="flex flex-col justify-between gap-5 h-full py-4 w-full scale-90">
      <div className="w-[90%] min-h-[400px] flex flex-col gap-3 mx-auto py-10 items-center overflow-y-scroll no-scrollbar h-full max-h-[600px]">
        {messages.map((e: any, index: number) => (
          <div
            key={index}
            className="w-full flex flex-col gap-4 max-w-[1200px] text-black/90 bg-gradient-to-br from-blue-100 to-red-100 border border-slate-300 shadow-md shadow-blue-300 rounded-md py-5 "
          >
            <p className="max-w-[400px] text-wrap leading-5 font-semibold mr-10 ml-auto w-fit bg-gradient-to-r from-purple-200 rounded-lg py-2 px-3 text-black">
              {questions[index]}
            </p>
            <p className="font-semibold w-[90%] ml-3 max-w-[800px] flex gap-4 text-wrap">
              <Avatar>
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mFGqpDiWkf1NOZqrkBGES8S5hbCYC_5tVQ&usqp=CAU"
                  className="object-cover"
                />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              {e}
            </p>
          </div>
        ))}
      </div>
      {loading && <Spinner />}
      <form
        onSubmit={handleSubmit}
        className="flex mx-5 gap-4 h-16 mt-auto"
        ref={formRef}
      >
        <textarea
          cols={5}
          rows={1}
          name="prompt"
          onChange={(e: any) => setPrompt(e.target.value)}
          className="break-words flex-1 px-10 py-2 border border-gray-300 outline-none rounded-md focus:outline-none h-full focus:ring-1 focus:ring-blue-200 max-w-[1000px] rounded-l-full"
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
      <form
        onSubmit={handleSubmit}
        className="flex mx-5 gap-4 h-16 mt-auto"
        ref={formRef}
      >
        <textarea
          cols={5}
          rows={1}
          name="prompt"
          onChange={(e: any) => setPrompt(e.target.value)}
          className="break-words flex-1 px-10 py-2 border border-gray-300 outline-none rounded-md focus:outline-none h-full focus:ring-1 focus:ring-blue-200 max-w-[1000px] rounded-l-full"
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
