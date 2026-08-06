import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiSend, FiCheckCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const samplePrompts = [
  "Tell me about yourself",
  "What technologies do you specialize in?",
  "Describe your AI Health Assistant project",
  "What Android architecture do you use?",
  "How do you integrate Generative AI?",
  "What is your React Native experience?",
  "What achievements do you have?",
  "Why should we hire you?",
  "Can I see your resume?",
  "How can I contact you?"
];

const promptAnswers = {
  "Tell me about yourself":
    "Hi! I'm Vikas Patel, a Software Engineer specializing in Android development and Generative AI. I build scalable mobile applications using Kotlin, Jetpack Compose, MVVM, React Native, and modern AI technologies including LLM integration, RAG pipelines, and on-device AI.",

  "What technologies do you specialize in?":
    "I specialize in Kotlin, Jetpack Compose, Java, MVVM, Hilt, Room, Retrofit, Coroutines, Flow, React Native, React.js, Node.js, MongoDB, Firebase, REST APIs, Prompt Engineering, RAG, LLM Integration, Hugging Face, MediaPipe, and Git.",

  "Describe your AI Health Assistant project":
    "I developed an AI-powered Health Assistant that allows users to ask health-related questions using voice or text. The application supports on-device LLM inference, medical report analysis, health history management, RAG-based knowledge retrieval, offline functionality, and modern Android architecture with Jetpack Compose.",

  "What Android architecture do you use?":
    "I follow Clean Architecture with MVVM. My applications use Repository Pattern, Hilt for dependency injection, Room for local storage, Retrofit for networking, Kotlin Coroutines and Flow for asynchronous programming, and Jetpack Compose for modern declarative UI development.",

  "How do you integrate Generative AI?":
    "I integrate Generative AI using GPT APIs, local LLMs, Retrieval-Augmented Generation (RAG), Prompt Engineering, vector embeddings, LoRA adapters, and MediaPipe. I focus on reducing token usage, improving response quality, and supporting offline AI experiences.",

  "What is your React Native experience?":
    "I have professional experience building cross-platform applications using React Native. I work with Redux Toolkit, REST APIs, reusable components, navigation, state management, and native module integration while maintaining a clean project architecture.",

  "What achievements do you have?":
    "I received the Insightful Innovator Award for AI integration, solved 700+ coding problems across competitive programming platforms, achieved a 3★ CodeChef rating, earned a 5★ HackerRank badge in C Programming, and presented a Blockchain research paper at an international conference.",

  "Why should we hire you?":
    "I bring a combination of Android expertise, modern software engineering practices, and hands-on Generative AI experience. I can design scalable mobile applications, integrate intelligent AI features, optimize performance, and quickly adapt to new technologies to deliver high-quality products.",

  "Can I see your resume?":
    "Absolutely! You can download my latest resume using the 'Download Resume' button available on this portfolio. It includes my experience, technical skills, projects, achievements, and contact information.",

  "How can I contact you?":
    "You can reach me through the Contact section of this portfolio, LinkedIn, GitHub, or email. I'm always open to discussing Android development, AI projects, freelance opportunities, and full-time software engineering roles."
};

const FALLBACK_ANSWER =
  "Vikas is a Mobile AI Engineer proficient in Kotlin, Jetpack Compose, React Native, RAG pipelines, and on-device LLM inference. Try one of the preset prompts above!";

export default function AITerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "assistant",
      text: "Hello! I am Voicehealth AI Assistant. Click a prompt below or ask me a question about Vikas's engineering work.",
      done: true,
    },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef(null);
  const streamTimeoutRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    };
  }, []);
const [visiblePrompts, setVisiblePrompts] = useState([ "Tell me about yourself"]);
  const getRandomPrompts = () => {
    return [...samplePrompts]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  };
  // Streams the answer into the last (assistant) message chunk by chunk,
  // so it reads like it's being typed/generated live.
  const streamAnswer = (fullText) => {
    const words = fullText.split(" ");
    let currentIndex = 0;
    setIsStreaming(true);

    const pushNextChunk = () => {
      // Reveal 1-3 words per tick for a natural, uneven typing rhythm
      const chunkSize = Math.floor(Math.random() * 2) + 1;
      currentIndex += chunkSize;
      const partialText = words.slice(0, currentIndex).join(" ");
      const isDone = currentIndex >= words.length;

      setHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          type: "assistant",
          text: partialText,
          done: isDone,
        };
        return updated;
      });

      if (!isDone) {
        streamTimeoutRef.current = setTimeout(pushNextChunk, 40 + Math.random() * 60);
      } else {
        setIsStreaming(false);
        setVisiblePrompts(getRandomPrompts());
      }
    };

    pushNextChunk();
  };

  const handleAsk = (questionText) => {
    const q = questionText || input;
    if (!q.trim() || isStreaming) return;

    const answer = promptAnswers[q] || FALLBACK_ANSWER;

    setHistory((prev) => [
      ...prev,
      { type: "user", text: q, done: true },
      { type: "assistant", text: "", done: false }, // placeholder to stream into
    ]);
    setInput("");

    // Slight delay before streaming starts, like the assistant "thinking"
    streamTimeoutRef.current = setTimeout(() => streamAnswer(answer), 250);
  };

  return (
    <div className="rounded-3xl border border-white/1 bg-[#090d14]/30 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
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

      {/* Terminal History Display */}
      <div
        ref={scrollRef}
        className="max-h-56 overflow-y-auto space-y-3 p-3 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-xs sm:text-sm scroll-smooth"
      >
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
            <p className="leading-6">
              {msg.text}
              {msg.type === "assistant" && !msg.done && (
                <span className="inline-block w-1.5 h-3.5 ml-0.5 -mb-0.5 bg-cyan-300 animate-pulse" />
              )}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Preset Prompt Buttons */}
      <div className="flex flex-wrap gap-2 mb-4 mt-4">
        {visiblePrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={isStreaming}
            onClick={() => handleAsk(prompt)}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-cyan-200 transition hover:bg-cyan-400/20 hover:border-cyan-300/40 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <HiSparkles size={14} className="text-cyan-300" /> {prompt}
          </button>
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
          disabled={isStreaming}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 outline-none focus:border-cyan-300/60 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isStreaming}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-400/20 text-cyan-200 transition hover:bg-cyan-400/30 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiSend size={16} />
        </button>
      </form>
    </div>
  );
}