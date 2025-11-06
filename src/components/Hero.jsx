import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const GlowButton = ({ children, variant = 'primary' }) => {
  const base = 'relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0';
  const styles = {
    primary:
      'bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(217,70,239,0.55)]',
    ghost:
      'bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-md',
  };
  return (
    <button className={`${base} ${styles[variant]}`}>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
};

const Particles = () => {
  const dots = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-400/70 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            y: [0, -40, 0],
            x: [0, 10, -10, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(56,189,248,0.65)',
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(1200px_800px_at_50%_-20%,rgba(56,189,248,0.15),transparent),radial-gradient(1000px_700px_at_80%_20%,rgba(168,85,247,0.18),transparent)] bg-neutral-950">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      {/* Floating AI brain substitute aura ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ rotateY: 0, y: -10 }}
        animate={{ rotateY: 360, y: [ -10, 10, -10 ] }}
        transition={{ rotateY: { duration: 30, repeat: Infinity, ease: 'linear' }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.35),rgba(217,70,239,0.35),rgba(56,189,248,0.35))] blur-2xl"
          animate={{ boxShadow: [
            '0 0 40px rgba(56,189,248,0.35), inset 0 0 60px rgba(217,70,239,0.25)',
            '0 0 80px rgba(56,189,248,0.55), inset 0 0 80px rgba(217,70,239,0.35)',
            '0 0 40px rgba(56,189,248,0.35), inset 0 0 60px rgba(217,70,239,0.25)'
          ]}}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-cyan-200/90 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          Intellica • Customer Service AI Platform
        </motion.div>

        <motion.h1
          className="bg-gradient-to-br from-cyan-300 via-blue-200 to-fuchsia-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
        >
          Revolutionizing AI Interaction
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base text-blue-100/80 sm:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Harness the power of intelligent automation and adaptive reasoning.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <GlowButton>Get Started</GlowButton>
          <GlowButton variant="ghost">Watch Demo</GlowButton>
        </motion.div>
      </div>

      <Particles />
    </section>
  );
}
