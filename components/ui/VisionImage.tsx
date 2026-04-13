'use client';

import Image from 'next/image';
import { useState } from 'react';

interface VisionImageProps {
  src: string;
  alt: string;
  aspectRatio: '16:9' | '2:3' | '1:1';
  priority?: boolean;
  className?: string;
  overlay?: 'gradient-dark' | 'gradient-light' | 'none';
}

export function VisionImage({
  src,
  alt,
  aspectRatio,
  priority = false,
  className = '',
  overlay = 'none',
}: VisionImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const ratioClass = {
    '16:9': 'aspect-video',
    '2:3': 'aspect-[2/3]',
    '1:1': 'aspect-square',
  }[aspectRatio];

  const overlayClass = {
    'gradient-dark': 'bg-gradient-to-t from-black/60 via-transparent to-transparent',
    'gradient-light': 'bg-gradient-to-b from-white/30 via-transparent to-transparent',
    none: '',
  }[overlay];

  return (
    <div className={`relative overflow-hidden rounded-2xl ${ratioClass} ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-orange-50 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className={`object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        quality={85}
      />
      {overlay !== 'none' && <div className={`absolute inset-0 ${overlayClass}`} />}
    </div>
  );
}
