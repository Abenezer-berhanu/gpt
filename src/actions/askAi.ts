import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY,
  dangerouslyAllowBrowser: true
});
export const askAiQuestion = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
};
