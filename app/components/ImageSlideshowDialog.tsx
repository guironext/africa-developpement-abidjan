'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Pause, Play, Square } from 'lucide-react';
import { useEffect, useState, useRef, startTransition } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ImageSlideshowDialogProps {
  images: { image: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function ImageSlideshowDialog({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageSlideshowDialogProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const onCloseRef = useRef(onClose);
  const prevIsOpenRef = useRef(isOpen);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Translations
  const translations = {
    fr: {
      close: 'Fermer',
      closeGallery: 'Fermer la galerie',
      pauseSlideshow: 'Mettre en pause',
      playSlideshow: 'Lire',
      stopSlideshow: 'Arrêter',
      previousImage: 'Image précédente',
      nextImage: 'Image suivante',
      closeEsc: 'Fermer (ESC)',
      pauseSpace: 'Pause (Espace)',
      playSpace: 'Lire (Espace)',
      stopClose: 'Arrêter (Fermer)',
    },
    en: {
      close: 'Close',
      closeGallery: 'Close Gallery',
      pauseSlideshow: 'Pause slideshow',
      playSlideshow: 'Play slideshow',
      stopSlideshow: 'Stop and close slideshow',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      closeEsc: 'Close (ESC)',
      pauseSpace: 'Pause (Space)',
      playSpace: 'Play (Space)',
      stopClose: 'Stop (Close)',
    },
  };

  const t = translations[language];

  // Keep the ref updated with the latest onClose function
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Handle body overflow and reset index when dialog opens
  useEffect(() => {
    if (isOpen) {
      // Store the original overflow value
      const originalOverflow = document.body.style.overflow || 'unset';
      document.body.style.overflow = 'hidden';
      // Only reset index when transitioning from closed to open
      if (!prevIsOpenRef.current) {
        startTransition(() => {
          setCurrentIndex(initialIndex);
        });
      }
      prevIsOpenRef.current = isOpen;

      return () => {
        // Always restore overflow when dialog closes or component unmounts
        document.body.style.overflow = originalOverflow;
      };
    } else {
      // Ensure overflow is restored when dialog closes
      document.body.style.overflow = 'unset';
      prevIsOpenRef.current = isOpen;
    }
  }, [isOpen, initialIndex]);

  // Cleanup on unmount to ensure body overflow is restored
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isOpen || !isPlaying || images.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isOpen, isPlaying, images.length]);

  // Reset playing state when dialog opens
  useEffect(() => {
    if (isOpen) {
      // Reset to playing state when dialog opens
      startTransition(() => {
        setIsPlaying(true);
      });
    } else {
      // Stop playing when dialog closes
      startTransition(() => {
        setIsPlaying(false);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current();
      } else if (e.key === 'ArrowLeft') {
        setIsPlaying(false); // Pause when user manually navigates
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setIsPlaying(false); // Pause when user manually navigates
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev); // Toggle play/pause with spacebar
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  const goToNext = () => {
    setIsPlaying(false); // Pause when user manually navigates
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setIsPlaying(false); // Pause when user manually navigates
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              // Only close if clicking directly on backdrop, not on dialog content
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col"
            >
              {/* Close Button - Top Right */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 right-4 z-60 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors shadow-lg border border-white/20 cursor-pointer"
                aria-label={t.closeGallery}
                title={t.closeEsc}
                type="button"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease', padding: '5px' }}
              >
                <X size={24} />
              </motion.button>

              {/* Close Button - Top Left */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 left-4 z-60 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-colors shadow-lg border border-white/20 flex items-center gap-2 text-sm font-medium cursor-pointer"
                aria-label={t.closeGallery}
                type="button"
                style={{ cursor: 'pointer', transition: 'all 0.3s ease', padding: '5px' }}
              >
                <X size={18} />
                <span>{t.close}</span>
              </motion.button>

              {/* Play/Pause and Stop Buttons - Top Center (Always Visible) */}
              {images.length > 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-60 flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlayPause();
                    }}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors shadow-lg border border-white/20 cursor-pointer"
                    aria-label={isPlaying ? t.pauseSlideshow : t.playSlideshow}
                    title={isPlaying ? t.pauseSpace : t.playSpace}
                    type="button"
                  >
                    {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="p-3 bg-red-500/80 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors shadow-lg border border-white/20 cursor-pointer"
                    aria-label={t.stopSlideshow}
                    title={t.stopClose}
                    type="button"
                  >
                    <Square size={20} fill="currentColor" />
                  </motion.button>
                </div>
              )}

              {/* Image Container */}
              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10 shadow-2xl group">
                {/* Close Overlay - Appears on Image Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none bg-black/40 backdrop-blur-sm transition-opacity"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="pointer-events-auto px-6 py-3 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-black/90 transition-colors shadow-xl border border-white/30 font-medium flex items-center gap-2 cursor-pointer"
                    aria-label={t.closeGallery}
                    type="button"
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease', padding: '5px' }}
                  >
                    <X size={20} />
                    <span>{t.closeGallery}</span>
                  </motion.button>
                </motion.div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex].image}
                      alt={`Slide ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors shadow-lg border border-white/20 z-40"
                      aria-label={t.previousImage}
                    >
                      <ChevronLeft size={28} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors shadow-lg border border-white/20 z-40"
                      aria-label={t.nextImage}
                    >
                      <ChevronRight size={28} />
                    </motion.button>
                  </>
                )}

                {/* Image Counter and Play/Pause/Stop Buttons */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
                  {/* Play/Pause Button - Bottom */}
                  {images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlayPause();
                        }}
                        className="p-3 bg-[#d4af37]/90 backdrop-blur-md rounded-full text-[#1a4d3e] hover:bg-[#d4af37] transition-colors shadow-xl border-2 border-white/30 font-bold"
                        aria-label={isPlaying ? t.pauseSlideshow : t.playSlideshow}
                        title={isPlaying ? t.pauseSpace : t.playSpace}
                        type="button"
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease', padding: '5px' }}
                      >
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onClose();
                        }}
                        className="p-3 bg-red-500/90 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors shadow-xl border-2 border-white/30 font-bold"
                        aria-label={t.stopSlideshow}
                        title={t.stopClose}
                        type="button"
                        style={{ cursor: 'pointer', transition: 'all 0.3s ease', padding: '5px' }}
                      >
                        <Square size={20} fill="currentColor" />
                      </motion.button>
                    </>
                  )}
                  {/* Image Counter */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 shadow-lg"
                  >
                    {currentIndex + 1} / {images.length}
                  </motion.div>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                >
                  {images.map((img, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsPlaying(false); // Pause when user clicks thumbnail
                        setCurrentIndex(index);
                      }}
                      className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentIndex === index
                          ? 'border-[#d4af37] ring-2 ring-[#d4af37]/50'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <Image
                        src={img.image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      {currentIndex === index && (
                        <motion.div
                          layoutId="activeThumbnail"
                          className="absolute inset-0 bg-[#d4af37]/20"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Close Gallery Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-lg text-white hover:bg-white/20 transition-colors shadow-lg border border-white/20 font-medium cursor-pointer"
                  aria-label={t.closeGallery}
                  type="button"
                >
                  <X size={20} />
                  <span>{t.closeGallery}</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

