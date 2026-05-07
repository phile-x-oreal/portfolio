import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "./Particles";
import {
  ArrowRight,
  Mail,
  Code2,
  Database,
  Cpu,
  Rocket,
  Github,
  Sparkles,
} from "lucide-react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Python Developer",
];

function useTyping(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];

    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);

        if (next === word) {
          setTimeout(() => setDel(true), pause);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);

        if (next.length === 0) {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, del ? speed / 2 : speed);

    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="absolute inset-0 bg-grid opacity-40" />

      <Particles density={70} />

      {/* Floating tech icons */}
      {[
        { Icon: Code2, x: "8%", y: "22%", d: "0s" },
        { Icon: Database, x: "85%", y: "30%", d: "1.2s" },
        { Icon: Cpu, x: "12%", y: "75%", d: "2s" },
        { Icon: Rocket, x: "82%", y: "78%", d: "0.6s" },
        { Icon: Sparkles, x: "50%", y: "12%", d: "1.8s" },
      ].map(({ Icon, x, y, d }, k) => (
        <div
          key={k}
          className="absolute hidden md:block animate-float"
          style={{ left: x, top: y, animationDelay: d }}
        >
          <div className="glass-card p-3 neon-glow">
            <Icon className="h-5 w-5 text-[var(--neon-cyan)]" />
          </div>
        </div>
      ))}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Karthik</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-lg sm:text-xl text-muted-foreground"
          >
            MCA Graduate · Software Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-2xl sm:text-3xl font-mono"
          >
            <span className="text-muted-foreground">{"> "}</span>

            <span className="text-gradient">{typed}</span>

            <span className="inline-block w-[2px] h-7 align-middle ml-1 bg-[var(--neon-cyan)] animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            Passionate software engineer focused on building modern,
            scalable, and user-friendly applications with innovative
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-background bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] shadow-[0_0_30px_-6px_var(--neon-blue)] hover:shadow-[0_0_40px_var(--neon-purple)] transition-all hover:-translate-y-0.5"
            >
              View Projects

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-[var(--neon-cyan)]/50 transition-all hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>

            <a
              href="https://github.com/phile-x-oreal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-[var(--neon-purple)]/50 transition-all"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            
            {/* Orbits */}
            <div className="absolute inset-0 rounded-full border border-[var(--neon-blue)]/30 animate-spin-slow" />

            <div
              className="absolute inset-6 rounded-full border border-[var(--neon-purple)]/30"
              style={{
                animation: "spin 24s linear infinite reverse",
              }}
            />

            <div className="absolute inset-12 rounded-full border border-[var(--neon-cyan)]/20" />

            {/* Orbiting dot */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative h-full w-full">
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: "orbit 14s linear infinite",
                  }}
                >
                  <span className="block h-3 w-3 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_18px_var(--neon-cyan)]" />
                </span>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            {/* PROFILE IMAGE */}
<div className="absolute inset-10 rounded-full p-[4px] bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] animate-glow-pulse shadow-[0_0_60px_rgba(0,255,255,0.45)]">

  <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 bg-black">

    <img
      src="/images/profile.jpg"
      alt="Karthik"
      className="absolute inset-0 h-full w-full object-cover scale-[1.15] object-top"
    />

    {/* Overlay Glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

  </div>
</div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-1">
        <span>Scroll</span>

        <span className="block h-8 w-[2px] bg-gradient-to-b from-[var(--neon-cyan)] to-transparent" />
      </div>
    </section>
  );
}