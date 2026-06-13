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
  sizes?: string;
  /**
   * Full-bleed background mode: the wrapper fills its (positioned) parent via
   * `absolute inset-0` instead of using `position: relative` + aspect ratio.
   * Avoids the relative/absolute class conflict when used as a hero backdrop.
   */
  fill?: boolean;
}

export function VisionImage({
  src,
  alt,
  aspectRatio,
  priority = false,
  className = '',
  overlay = 'none',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  fill = false,
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

  const wrapperClass = fill
    ? `absolute inset-0 w-full h-full overflow-hidden ${className}`
    : `relative overflow-hidden rounded-2xl ${ratioClass} ${className}`;

  return (
    <div className={wrapperClass}>
      {!isLoaded && !fill && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-orange-50 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        quality={85}
      />
      {overlay !== 'none' && <div className={`absolute inset-0 ${overlayClass}`} />}
    </div>
  );
}
