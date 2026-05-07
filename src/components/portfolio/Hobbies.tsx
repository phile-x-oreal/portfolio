import { motion } from "framer-motion";
import { Globe, Gamepad2 } from "lucide-react";
import { SectionHeader } from "./Section";

const hobbies = [
  { Icon: Globe, title: "Internet Surfing", desc: "Exploring new tech, ideas, and the wild corners of the web." },
  { Icon: Gamepad2, title: "Gaming", desc: "Unwinding with immersive worlds and competitive challenges." },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader eyebrow="Hobbies" title={<>Beyond the <span className="text-gradient">code</span></>} />
        <div className="grid sm:grid-cols-2 gap-6">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[var(--neon-purple)]/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)]/30 to-[var(--neon-purple)]/30 border border-white/10 animate-float">
                <h.Icon className="h-7 w-7 text-[var(--neon-cyan)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{h.title}</h3>
              <p className="mt-2 text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
