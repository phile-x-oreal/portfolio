import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--neon-cyan)]/30" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--neon-cyan)] border-r-[var(--neon-purple)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 grid place-items-center text-2xl font-bold text-gradient">K</div>
          </div>
          <motion.div
            className="absolute bottom-20 text-xs font-mono tracking-[0.4em] text-muted-foreground"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            LOADING
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
