import React from 'react';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import RAGProcessing from './components/RAGProcessing';
import RefundVision from './components/RefundVision';
import Team from './components/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Ecosystem />
      <RAGProcessing />
      <RefundVision />
      <Team />
      <footer className="bg-neutral-950 py-10 text-center text-xs text-blue-200/60">
        <div className="mx-auto max-w-6xl px-6">
          © {new Date().getFullYear()} Intellica • Built for an intelligent, cinematic web.
        </div>
      </footer>
    </div>
  );
}
