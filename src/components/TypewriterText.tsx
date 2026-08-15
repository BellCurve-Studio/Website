"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterText({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 2200,
  className = "",
  cursorClassName = "text-[#ed542d] animate-pulse",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting phase
      timer = setTimeout(() => {
        setDisplayText((prev) => currentPhrase.substring(0, prev.length - 1));
        if (displayText.length <= 1) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      // Typing phase
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Full phrase typed, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block ml-0.5 font-sans font-bold ${cursorClassName}`}>|</span>
    </span>
  );
}
