rimport { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("Enter Your Api Key");

export async function runAgent(question, options) {

  const model = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite-preview"
  });

  const prompt = `
You are solving a multiple choice question.

Question:
${question}

Options:
${options.join("\n")}

Rules:
- One or more options may be correct.
- Only choose from the options listed.
- Match the option text exactly.

Return ONLY JSON in this format:

{
 "answer":["A","B","C","D"],
 "explanation":"short explanation under 40 words"
}

If only one answer is correct, return a single-element array.
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  try {

    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) throw new Error("No JSON found");

    return JSON.parse(jsonMatch[0]);

  } catch {

    return {
      answer: [],
      explanation: text
    };

  }

}
