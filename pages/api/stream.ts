import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  try {
    const promptAI = `Extrae los conceptos clave de esta búsqueda de producto: "${prompt}". Devuelve solo una lista de palabras clave relevantes, sin explicaciones y solo separados por comas`;
    const openaiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: promptAI }],
        }),
      }
    );

    const data = await openaiResponse.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error("❌ Error calling OpenAI:", error);
    return res.status(500).json({ error: "Failed to process request" });
  }
}
