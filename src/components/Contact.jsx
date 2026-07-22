import { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FiMail, FiSend } from "react-icons/fi";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../constant";
import { profile } from "../data/portfolio";
import { AnimatedCard, MagneticButton, Section, SectionHeader } from "./ui/MotionPrimitives";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID || TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY || PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Your message was sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Something went wrong!");
          setLoading(false);
        },
      );
  };

  return (
    <Section name="contact" className="pb-16 sm:pb-24">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build a mobile AI product that feels effortless."
          description="Reach out for Android, React Native, Generative AI, or full-stack product work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedCard className="p-5 sm:p-7 md:p-8">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-cyan-300/[0.14] text-cyan-300">
              <FiMail size={24} />
            </div>
            <h3 className="mt-5 sm:mt-6 text-2xl sm:text-3xl font-black text-white">Available for focused engineering work.</h3>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 text-white/[0.68]">
              I care about responsive UI, reliable offline behavior, thoughtful AI integration, and code that is easy to extend.
            </p>
            <div className="mt-6 sm:mt-7 space-y-2.5 text-xs sm:text-sm font-semibold text-cyan-100/90">
              <p className="flex items-center gap-2">
                <span className="text-white/40">Email:</span> {profile.email}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/40">Phone:</span> {profile.phone}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white/40">Location:</span> {profile.location}
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="p-5 sm:p-7 md:p-8">
            <form ref={form} className="grid gap-3.5 sm:gap-4" onSubmit={sendEmail}>
              <div className="grid gap-3.5 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <input type="text" name="from_name" placeholder="Your name" className="glass-input" required />
                <input type="email" name="from_email" placeholder="Your email" className="glass-input" required />
              </div>
              <div className="grid gap-3.5 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                <input type="text" name="mobile_number" placeholder="Mobile number" className="glass-input" />
                <input type="text" name="city" placeholder="City" className="glass-input" />
              </div>
              <textarea name="message" placeholder="Project details" rows={6} className="glass-input resize-none" required />
              <MagneticButton type="submit" disabled={loading} className={`w-full sm:w-auto ${loading ? "opacity-60" : ""}`}>
                <FiSend /> {loading ? "Sending..." : "Send Message"}
              </MagneticButton>
            </form>
          </AnimatedCard>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

