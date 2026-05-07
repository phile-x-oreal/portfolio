import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    title: "Master of Computer Applications (MCA)",
    org: "MCA Graduate",
    period: "Completed",
    desc: "Advanced studies in software engineering, algorithms, databases, and modern application development.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">journey</span></>}
        />
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)]" />
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-10"
            >
              <div className="absolute -left-[26px] sm:-left-[34px] top-2 grid place-items-center h-7 w-7 rounded-full bg-background border-2 border-[var(--neon-cyan)] shadow-[0_0_18px_var(--neon-cyan)]">
                <GraduationCap className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
              </div>
              <div className="glass-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <span className="text-xs font-mono text-[var(--neon-cyan)]">{it.period}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{it.org}</div>
                <p className="mt-3 text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
