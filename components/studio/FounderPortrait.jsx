"use client";

import Image from "next/image";
import { useState } from "react";

export default function FounderPortrait({ portrait, name }) {
  const [isColorRevealed, setIsColorRevealed] = useState(false);

  return <figure>
    <button type="button" className="echo-portrait-toggle" aria-label="Show portrait in color" aria-pressed={isColorRevealed} onClick={() => setIsColorRevealed(value => !value)}>
      <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} unoptimized sizes="(max-width: 700px) 90vw, 40vw" />
    </button>
    <figcaption>{name}, founder</figcaption>
  </figure>;
}
