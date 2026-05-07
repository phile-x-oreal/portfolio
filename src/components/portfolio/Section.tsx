import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center mb-14"
    >
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
