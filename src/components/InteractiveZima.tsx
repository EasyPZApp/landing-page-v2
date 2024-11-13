'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function InteractiveZima() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => setIsPressed(true);
  const handleRelease = () => setIsPressed(false);

  return (
    <div 
      className="opacity-0" 
      data-animate
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onMouseLeave={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
    >
      <Image
        src={isPressed ? '/images/zima-power2.gif' : '/images/zima-power.gif'}
        alt="Zima the magical cat"
        width={300}
        height={300}
        className="mx-auto cursor-pointer"
        draggable={false}
      />
    </div>
  );
}