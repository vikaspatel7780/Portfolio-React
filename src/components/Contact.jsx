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
    <Section name="contact" className="pb-24">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build a mobile AI product that feels effortless."
          description="Reach out for Android, React Native, Generative AI, or full-stack product work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedCard className="p-6 md:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/[0.12] text-cyan-100">
              <FiMail size={26} />
            </div>
            <h3 className="mt-6 text-3xl font-black text-white">Available for focused engineering work.</h3>
            <p className="mt-4 text-sm leading-6 text-white/[0.62]">
              I care about responsive UI, reliable offline behavior, thoughtful AI integration, and code that is easy to extend.
            </p>
            <div className="mt-7 space-y-3 text-sm font-semibold text-white/[0.62]">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>{profile.location}</p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="p-6 md:p-8">
            <form ref={form} className="grid gap-4" onSubmit={sendEmail}>
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" name="from_name" placeholder="Your name" className="glass-input" required />
                <input type="email" name="from_email" placeholder="Your email" className="glass-input" required />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" name="mobile_number" placeholder="Mobile number" className="glass-input" />
                <input type="text" name="city" placeholder="City" className="glass-input" />
              </div>
              <textarea name="message" placeholder="Project details" rows={8} className="glass-input resize-none" required />
              <MagneticButton type="submit" disabled={loading} className={loading ? "opacity-60" : ""}>
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
