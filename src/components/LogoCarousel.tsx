import React, { useEffect, useRef, useState } from 'react';

const logos = [
  '/logos/gu.png',
];

export default function LogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState('30s');

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2; // width of one full set
      const speed = 100; // pixels per second
      const duration = totalWidth / speed;
      setAnimationDuration(`${duration}s`);
    }
  }, []);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#fff',
        padding: '20px 0',
        position: 'relative',
      }}
    >
      {/* Keyframes injected to document */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* Outer animated container */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          animation: `scroll ${animationDuration} linear infinite`,
          width: 'max-content',
        }}
      >
        {/* Duplicate logos to enable looping */}
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 auto',
              margin: '0 30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={src}
              alt={`logo-${i}`}
              width={160}
              height={80}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
