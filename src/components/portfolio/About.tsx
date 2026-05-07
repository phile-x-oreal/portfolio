import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Code2, Layout, Layers, Sparkles } from "lucide-react";
import { SectionHeader } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const facts = [
  { Icon: GraduationCap, text: "MCA Graduate" },
  { Icon: Code2, text: "Passionate about full-stack development" },
  { Icon: Layers, text: "Interested in modern web technologies" },
  { Icon: Sparkles, text: "Loves creating impactful applications" },
  { Icon: Layout, text: "Focused on clean UI/UX and scalable systems" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 70% 30%, color-mix(in oklab, var(--neon-purple) 15%, transparent), transparent 60%)" }} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title={<>The <span className="text-gradient">developer</span> behind the code</>}
          subtitle="A snapshot of who I am and what drives me."
        />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--neon-purple)]/20 blur-3xl" />
            <h3 className="text-2xl font-semibold">Hi again — I'm Karthik 👋</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I build modern, scalable, and user-friendly applications. From elegant front-ends
              to robust back-end systems, I love crafting digital experiences that feel fast,
              fluid, and a little bit magical.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {facts.map(({ Icon, text }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-3"
                >
                  <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20 border border-white/10">
                    <Icon className="h-4 w-4 text-[var(--neon-cyan)]" />
                  </span>
                  <span className="text-sm">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              { label: "Projects Completed", value: 12, suffix: "+" },
              { label: "Technologies Learned", value: 15, suffix: "+" },
              { label: "Coding Hours", value: 2400, suffix: "+" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="text-4xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
