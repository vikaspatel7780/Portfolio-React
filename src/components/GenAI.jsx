import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiZap } from "react-icons/fi";
import { aiCapabilities } from "../data/portfolio";
import { fadeUp } from "./ui/animations";
import { Section, SectionHeader } from "./ui/MotionPrimitives";

const GenAI = () => {
  return (
    <Section name="gen-ai">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Generative AI"
          title="LLM systems built for mobile realities."
          description="The AI layer is designed around latency, privacy, offline support, and useful domain-specific reasoning rather than demo-only chat."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} className="premium-card p-6 md:p-8">
            <div className="grid gap-4">
              {[
                ["RAG", "Embeddings + vector search for contextual answers", FiDatabase],
                ["LoRA", "Personalized adapters trained and prepared for mobile inference", FiCpu],
                ["Offline AI", "Gemma, WorkManager, secure local stores, and cloud fallback", FiZap],
              ].map(([title, copy, Icon]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                  <Icon className="mb-4 text-cyan-200" size={26} />
                  <h3 className="text-xl font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/[0.58]">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="premium-card p-6 md:p-8">
            <div className="grid gap-3">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/[0.14] p-4"
                  whileHover={{ x: 6 }}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/[0.12] text-xs font-black text-cyan-100">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/70">{capability}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default GenAI;
