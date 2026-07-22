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

            <div className="premium-card p-5 sm:p-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300 mb-3">Core AI System Capabilities</h4>
              <div className="grid gap-2.5">
                {aiCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/[0.18] p-3 transition hover:bg-white/[0.06]"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/[0.16] text-[10px] font-black text-cyan-200">
                      {index + 1}
                    </span>
                    <p className="text-xs leading-5 text-white/80">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default GenAI;


