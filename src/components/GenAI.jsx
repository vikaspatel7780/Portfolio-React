import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiZap } from "react-icons/fi";
import { aiCapabilities } from "../data/portfolio";
import { fadeUp } from "./ui/animations";
import { Section, SectionHeader } from "./ui/MotionPrimitives";
import AITerminal from "./ui/AITerminal";

const GenAI = () => {
  return (
    <Section name="gen-ai">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Generative AI"
          title="LLM systems built for mobile realities."
          description="The AI layer is designed around latency, privacy, offline support, and useful domain-specific reasoning rather than demo-only chat."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} className="premium-card p-5 sm:p-7 md:p-8">
            <div className="grid gap-3.5 sm:gap-4">
              {[
                ["RAG", "Embeddings + vector search for contextual answers", FiDatabase],
                ["LoRA", "Personalized adapters trained and prepared for mobile inference", FiCpu],
                ["Offline AI", "Gemma, WorkManager, secure local stores, and cloud fallback", FiZap],
              ].map(([title, copy, Icon]) => (
                <div key={title} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.045] p-4 sm:p-5 transition hover:border-cyan-300/30">
                  <Icon className="mb-3 sm:mb-4 text-cyan-300" size={24} />
                  <h3 className="text-lg sm:text-xl font-black text-white">{title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-6 text-white/[0.65]">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6">
            <AITerminal />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default GenAI;


