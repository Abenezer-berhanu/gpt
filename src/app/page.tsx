import Box from "@/components/Box";
import Form from "@/components/Form";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <Header />
      <Box />
      <Form />
    </div>
  );
}
