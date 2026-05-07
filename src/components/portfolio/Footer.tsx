import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10 overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent animate-gradient-shift" style={{ backgroundSize: "200% 100%" }} />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <span key={i}
              className="absolute h-1 w-1 rounded-full bg-[var(--neon-cyan)] animate-float"
              style={{
                left: `${(i * 9 + 5) % 95}%`,
                top: `${20 + (i * 7) % 60}%`,
                animationDelay: `${i * 0.4}s`,
                boxShadow: "0 0 10px var(--neon-cyan)",
                opacity: 0.5,
              }} />
      ))}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-12 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] text-background font-bold">K</span>
              <span className="font-bold tracking-wide text-gradient">Karthik</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">Crafting modern, scalable software with a designer's eye and an engineer's mind.</p>
          </div>
          <div className="flex md:justify-center gap-3">
            {[
              { href: "https://www.linkedin.com/in/karthik-codex/", Icon: Linkedin },
              { href: "https://github.com/phile-x-oreal", Icon: Github },
              { href: "mailto:karthiksathyan47@gmail.com", Icon: Mail },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                 className="grid place-items-center h-10 w-10 rounded-xl glass hover:border-[var(--neon-cyan)]/60 hover:shadow-[0_0_20px_-4px_var(--neon-cyan)] transition hover:-translate-y-0.5">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="md:text-right">
            <a href="#home" className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass hover:border-[var(--neon-purple)]/60 transition text-sm">
              <ArrowUp className="h-4 w-4" /> Back to top
            </a>
          </div>
        </div>
        <div className="mt-10 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Karthik. All rights reserved.</div>
          <div>Designed & engineered with <span className="text-[var(--neon-purple)]">♥</span> using React + Framer Motion.</div>
        </div>
      </div>
    </footer>
  );
}
