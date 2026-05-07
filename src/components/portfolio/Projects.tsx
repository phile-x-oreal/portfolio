import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, HandCoins, Megaphone, LayoutDashboard, Wallet, Smartphone } from "lucide-react";
import { SectionHeader } from "./Section";

const features = [
  { Icon: Shield, label: "Secure Authentication" },
  { Icon: HandCoins, label: "Donation Management" },
  { Icon: Megaphone, label: "Campaign System" },
  { Icon: LayoutDashboard, label: "Admin Dashboard" },
  { Icon: Wallet, label: "Expense Tracking" },
  { Icon: Smartphone, label: "Responsive UI" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at 30% 50%, color-mix(in oklab, var(--neon-blue) 15%, transparent), transparent 60%)" }} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title={<>Featured <span className="text-gradient">work</span></>}
          subtitle="A selection of projects I'm proud to have built."
        />

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card relative overflow-hidden p-8 lg:p-10 group"
        >
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--neon-purple)]/30 blur-3xl group-hover:bg-[var(--neon-purple)]/40 transition" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[var(--neon-cyan)]/20 blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--neon-cyan) 25%, transparent), color-mix(in oklab, var(--neon-purple) 25%, transparent))" }} />
                <div className="absolute inset-6 glass-card flex items-center justify-center text-center p-6">
                  <div>
                    <div className="text-5xl font-bold text-gradient">CrowdFund</div>
                    <div className="mt-2 text-sm text-muted-foreground">Transparent fundraising for those in need</div>
                    <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                      <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                        <div className="text-base font-bold text-[var(--neon-cyan)]">$48k</div>
                        <div className="text-muted-foreground">Raised</div>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                        <div className="text-base font-bold text-[var(--neon-cyan)]">230</div>
                        <div className="text-muted-foreground">Donors</div>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                        <div className="text-base font-bold text-[var(--neon-cyan)]">12</div>
                        <div className="text-muted-foreground">Campaigns</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div>
              <div className="text-xs font-mono text-[var(--neon-cyan)]">FEATURED PROJECT</div>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold">Crowd Funding Platform</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A modern crowdfunding platform built to help patients and people in need raise
                funds efficiently with transparency and secure management systems.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {features.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="grid place-items-center h-7 w-7 rounded-md bg-white/5 border border-white/10">
                      <Icon className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-background bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] shadow-[0_0_24px_-6px_var(--neon-blue)] hover:shadow-[0_0_32px_var(--neon-purple)] transition">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                <a href="https://github.com/phile-x-oreal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium glass hover:border-[var(--neon-cyan)]/50 transition">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
