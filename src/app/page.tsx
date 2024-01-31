import Box from "@/components/Box";
import Form from "@/components/Form";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AbenuGpt",
  description: "Generated by Abenu",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-bl from-green-600/30 to-purple-200">
        <p className="text-white text-sm bg-blue-600 tracking-wider text-center w-full font-semibold py-3">Sorry, currently Image uploading is Not giving service. </p>
      <Header />
      <Box />
      <Form />
    </div>
  );
}
