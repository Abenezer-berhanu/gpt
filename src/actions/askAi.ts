import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});
export const askAiQuestion = async (prompt: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 300,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};
