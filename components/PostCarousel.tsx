'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BlogImage } from '@/lib/blog';

interface PostCarouselProps {
  images: BlogImage[];
}

const AUTOPLAY_INTERVAL = 4000;

export default function PostCarousel({ images }: PostCarouselProps) {
  const validImages = images?.filter((img) => img?.src) || [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    if (!emblaApi || prefersReducedMotion || isHovering) return;
    autoplayTimer.current = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_INTERVAL);
  }, [emblaApi, isHovering, prefersReducedMotion]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [resetAutoplay]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    resetAutoplay();
  }, [emblaApi, resetAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      resetAutoplay();
    },
    [emblaApi, resetAutoplay]
  );

  if (!validImages.length) return null;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] bg-white dark:bg-slate-900"
      data-aos="fade-up"
    >
      <div
        className="embla"
        ref={emblaRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex">
          {validImages.map((img, idx) => (
            <div className="relative min-w-0 shrink-0 grow-0 basis-full" key={`${img.src}-${idx}`}>
              <div className="relative h-[320px] md:h-[420px] w-full">
                {/* Single responsive image that fills horizontal space without distortion */}
                <Image
                  src={img.src}
                  alt={img.alt || img.caption || `Slide ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  style={{ objectPosition: 'center bottom' }}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
              {/* Caption overlay removed per request */}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-3 backdrop-blur transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 focus:ring-accent-blue"
      >
        <span className="sr-only">Previous</span>
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-3 backdrop-blur transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 focus:ring-accent-blue"
      >
        <span className="sr-only">Next</span>
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {validImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selectedIndex === index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 focus:ring-accent-blue ${
              selectedIndex === index ? 'w-6 bg-accent-blue' : 'w-2.5 bg-white/70 dark:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
