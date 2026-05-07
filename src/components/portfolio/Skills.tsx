import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./Section";

const skills = [
  { name: "Python", level: 90, color: "from-yellow-300 to-blue-400" },
  { name: "Java", level: 80, color: "from-orange-400 to-red-500" },
  { name: "PHP", level: 75, color: "from-indigo-400 to-purple-500" },
  { name: "HTML", level: 95, color: "from-orange-400 to-pink-500" },
  { name: "CSS", level: 90, color: "from-cyan-400 to-blue-500" },
  { name: "JavaScript", level: 85, color: "from-yellow-300 to-amber-500" },
  { name: "React", level: 88, color: "from-cyan-300 to-sky-500" },
  { name: "MySQL", level: 82, color: "from-sky-400 to-indigo-500" },
   { name: "Angular", level: 89, color: "from-sky-400 to-indigo-500" },
    { name: "MongoDb", level: 88, color: "from-sky-400 to-indigo-500" },
     { name: "Git", level: 85, color: "from-sky-400 to-indigo-500" }, 
     { name: "Bootstrap", level: 87, color: "from-sky-400 to-indigo-500" },
  
];

function Ring({ value }: { value: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const r = 36;
  const c = 2 * Math.PI * r;
  const offset = c - (c * value) / 100;
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
      <defs>
        <linearGradient id={`g-${value}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.18 195)" />
          <stop offset="50%" stopColor="oklch(0.72 0.20 235)" />
          <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />
      <motion.circle
        cx="50" cy="50" r={r}
        stroke={`url(#g-${value})`} strokeWidth="8" fill="none" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: c }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ filter: "drop-shadow(0 0 6px oklch(0.72 0.20 235))" }}
      />
    </svg>
  );
}

function SkillCard({ s, i }: { s: typeof skills[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="glass-card p-6 relative overflow-hidden transition-transform duration-200 group"
    >
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
           style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--neon-cyan) 30%, transparent), transparent 40%, color-mix(in oklab, var(--neon-purple) 30%, transparent))", maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", padding: 1 }} />
      <div className="flex items-center gap-4">
        <div className="relative">
          <Ring value={s.level} />
          <div className="absolute inset-0 grid place-items-center text-sm font-semibold">{s.level}%</div>
        </div>
        <div>
          <div className="text-lg font-semibold">{s.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">Proficiency</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title={<>Tech <span className="text-gradient">stack</span> & tools</>}
          subtitle="Languages and tools I use to bring ideas to life."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => <SkillCard key={s.name} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
