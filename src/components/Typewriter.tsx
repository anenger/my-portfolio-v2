import * as React from "react";

interface TypewriterProps {
  text: string;
  startDelay?: number;
  className?: string;
}

const baseStep = 75;
const pauseAfter: Record<string, number> = { ",": 260, ".": 200 };

// Deterministic jitter so the rhythm feels hand-typed but renders identically
// on the server and client.
const jitter = (index: number) => (((index * 37) % 7) - 3) * 12;

const buildTimeline = (text: string, startDelay: number) => {
  const delays: number[] = [];
  let time = startDelay;

  for (const [index, char] of Array.from(text).entries()) {
    delays.push(time);
    time += baseStep + jitter(index) + (pauseAfter[char] ?? 0);
  }

  return { delays, end: time };
};

export const Typewriter = ({
  text,
  startDelay = 300,
  className = "",
}: TypewriterProps) => {
  const chars = Array.from(text);
  const { delays, end } = buildTimeline(text, startDelay);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {chars.map((char, index) => {
          const delay = delays[index] ?? 0;
          const next = delays[index + 1] ?? end;

          return (
            <span
              key={index}
              className="typewriter-char"
              style={
                {
                  "--delay": `${delay}ms`,
                  "--duration": `${next - delay}ms`,
                } as React.CSSProperties
              }
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};
