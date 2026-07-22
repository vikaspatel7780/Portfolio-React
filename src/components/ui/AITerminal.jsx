import { useState } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiSend, FiCheckCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";


const samplePrompts = [
  "What is Vikas's tech stack?",
  "Tell me about Voicehealth AI",
  "Offline RAG experience?",
];

const promptAnswers = {
  "What is Vikas's tech stack?":
    "Vikas specializes in Android (Kotlin, Jetpack Compose, MVVM, Room, Retrofit), React Native (Redux Toolkit), Generative AI (On-device Gemma, RAG, LoRA adapters), and Full Stack Web (React.js, Node.js, MongoDB).",
  "Tell me about Voicehealth AI":
    "Voicehealth is an AI assistant built with Kotlin & Jetpack Compose, featuring on-device Gemma LLM inference, RAG document search, LoRA adapters, and background offline task execution.",
  "Offline RAG experience?":
    "Vikas builds offline-first RAG pipelines combining local vector embeddings with SQLite/Room persistence, ensuring fast sub-second AI query responses even without internet connectivity.",
};

export default function AITerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "assistant",
      text: "Hello! I am Voicehealth AI Assistant. Click a prompt below or ask me a question about Vikas's engineering work.",
    },
  ]);

  const handleAsk = (questionText) => {
    const q = questionText || input;
    if (!q.trim()) return;

    const answer =
      promptAnswers[q] ||
      `Vikas is a Mobile AI Engineer proficient in Kotlin, Jetpack Compose, React Native, RAG pipelines, and on-device LLM inference. Try one of the preset prompts above!`;

    setHistory((prev) => [
      ...prev,
      { type: "user", text: q },
      { type: "assistant", text: answer },
    ]);
    setInput("");
  };

  return (
    <div className="rounded-3xl border border-white/15 bg-[#090d14]/90 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
      {/* Terminal Bar Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono font-bold text-white/50 flex items-center gap-1.5">
            <FiTerminal className="text-cyan-300" /> Vscoder-AI-v2.4
          </span>
        </div>
        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> Online
        </span>
      </div>

      {/* Preset Prompt Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {samplePrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => handleAsk(prompt)}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/20 hover:border-cyan-300/40 active:scale-95"
          >
            <HiSparkles size={14} className="text-cyan-300" /> {prompt}
          </button>

        ))}
      </div>

      {/* Terminal History Display */}
      <div className="max-h-56 overflow-y-auto space-y-3 p-3 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-xs sm:text-sm">
        {history.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-2.5 ${msg.type === "user" ? "text-cyan-300" : "text-white/80"}`}
          >
            {msg.type === "user" ? (
              <span className="text-cyan-300 font-bold shrink-0">&gt;</span>
            ) : (
              <FiCheckCircle className="text-emerald-400 mt-0.5 shrink-0" size={15} />
            )}
            <p className="leading-6">{msg.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Custom Prompt Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="mt-4 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask VoiceHealth AI..."
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 outline-none focus:border-cyan-300/60"
        />
        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-400/20 text-cyan-200 transition hover:bg-cyan-400/30 active:scale-95"
        >
          <FiSend size={16} />
        </button>
      </form>
    </div>
  );
}
