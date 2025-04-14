import { useState } from "react";

export type OpenAIChoice = {
  index: number;
  message: {
    role: "assistant" | "user" | "system";
    content: string;
    refusal: null | string;
  };
  finish_reason: string;
};

export function useKeywords() {
  const [aiMessage, setAiMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const fetchKeywords = async (query: string) : Promise<string[]>=> {
    setIsLoading(true);
    setAiMessage("");

    try{
       const res = await fetch("/api/stream", {
      method: "POST",
      body: JSON.stringify({ prompt: query }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Error en la llamada a la API");
    }
    const data = await res.json();
    const message = data.choices
    ?.map((choice: OpenAIChoice) => choice.message?.content)
    .filter(Boolean)
    .join(", ");

  setAiMessage(message || "");

  const keywords = message
    .toLowerCase()
    .split(",")
    .map((k: string) => k.trim())
    .filter((k: string) => k.length > 0);

  return keywords;
    } catch (error){

      console.error("❌ Error al obtener keywords:", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {   fetchKeywords,
    aiMessage,
    isLoading,};
}