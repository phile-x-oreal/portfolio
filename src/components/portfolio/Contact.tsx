import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "../../lib/email";
import { SectionHeader } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Store form reference before await
    const form = e.currentTarget;
    try {
      await sendContactEmail(form);
      setSent(true);
      setTimeout(() => setSent(false), 2500);
      form.reset();
    } catch (err) {
      let message = "Failed to send message. Please try again later.";
      if (err instanceof Error) {
        message += `\nError: ${err.message}`;
        // Log the error stack for debugging
        if (err.stack) {
          // eslint-disable-next-line no-console
          console.error("EmailJS error:", err.stack);
        } else {
          // eslint-disable-next-line no-console
          console.error("EmailJS error:", err);
        }
      } else {
        // eslint-disable-next-line no-console
        console.error("EmailJS error:", err);
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 50% 50%, color-mix(in oklab, var(--neon-purple) 18%, transparent), transparent 60%)" }} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build</span> something</>}
          subtitle="Have a project in mind or just want to say hi? Drop a message."
        />
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-5"
          >
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="text-muted-foreground text-sm">Available for freelance, full-time roles, and interesting collaborations.</p>
            <a href="tel:9778337150" className="flex items-center gap-3 group">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--neon-cyan)]/60 transition">
                <Phone className="h-4 w-4 text-[var(--neon-cyan)]" />
              </span>
              <span>9778337150</span>
            </a>
            <a href="mailto:karthiksathyan47@gmail.com" className="flex items-center gap-3 group">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[var(--neon-purple)]/60 transition">
                <Mail className="h-4 w-4 text-[var(--neon-purple)]" />
              </span>
              <span>karthiksathyan47@gmail.com</span>
            </a>
            <div className="pt-2 flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/karthik-codex/", Icon: Linkedin },
                { href: "https://github.com/phile-x-oreal", Icon: Github },
              ].map(({ href, Icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                   className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-[var(--neon-cyan)]/60 hover:shadow-[0_0_22px_-4px_var(--neon-cyan)] transition hover:-translate-y-0.5">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" type="text" name="name" />
              <Field label="Email" type="email" name="email" />
            </div>
            <Field label="Subject" type="text" name="subject" />
            <Field label="Message" textarea name="message" />
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center gap-2 w-full rounded-xl px-6 py-3 font-medium text-background bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] shadow-[0_0_24px_-6px_var(--neon-blue)] hover:shadow-[0_0_36px_var(--neon-purple)] transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Sending..." : sent ? "Message sent ✨" : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
            {error && (
              <div className="text-red-500 text-sm pt-2 whitespace-pre-line">{error}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const [focus, setFocus] = useState(false);
  const cls = `peer w-full bg-transparent outline-none rounded-xl px-4 pt-5 pb-2 text-sm border border-white/10 focus:border-transparent transition`;
  return (
    <label className="block relative">
      <div className={`relative rounded-xl transition ${focus ? "shadow-[0_0_0_1px_var(--neon-cyan),0_0_24px_-6px_var(--neon-cyan)]" : ""}`}>
        {textarea ? (
          <textarea name={name} required rows={4} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={cls} />
        ) : (
          <input name={name} type={type} required onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={cls} />
        )}
        <span className={`pointer-events-none absolute left-4 top-3 text-xs text-muted-foreground transition-all`}>{label}</span>
      </div>
    </label>
  );
}
