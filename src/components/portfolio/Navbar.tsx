import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${scrolled ? "" : ""}`}>
        <div className={`glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_8px_40px_-10px_rgba(80,120,255,0.35)]" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] text-background font-bold shadow-[0_0_20px_var(--neon-blue)]">
              K
            </span>
            <span className="font-bold tracking-wide text-gradient">Karthik</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] px-4 py-1.5 text-sm font-medium text-background shadow-[0_0_20px_-4px_var(--neon-blue)] hover:shadow-[0_0_28px_var(--neon-purple)] transition-shadow"
          >
            Hire Me
          </a>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-4 bg-foreground" />
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-4 md:hidden flex flex-col gap-1"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
