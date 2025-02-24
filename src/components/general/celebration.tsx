"use client";

import { useRef, useEffect, useState } from "react";
import { Confetti, ConfettiRef } from "../magicui/confetti";

let triggerConfetti: (() => void) | null = null; // Global function reference

export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Assign the function without calling it here.
    triggerConfetti = () => {
      confettiRef.current?.fire({});
    };
  }, []);

  if (!mounted) return null; // Prevent hydration errors

  return (
    <div className="absolute top-0 left-0 h-screen w-screen overflow-hidden pointer-events-none">
      <Confetti ref={confettiRef} className="absolute inset-0 z-0" />
    </div>
  );
}

// Export the function so it can be used anywhere
export const fireConfetti = () => {
  if (triggerConfetti) {
    triggerConfetti();
  }
};
