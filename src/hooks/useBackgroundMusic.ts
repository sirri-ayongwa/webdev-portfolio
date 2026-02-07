import { useState, useEffect, useRef, useCallback } from "react";

const useBackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/snowfall.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Start music on first scroll or navigation, only once
  useEffect(() => {
    if (hasStarted) return;

    const handleScroll = () => {
      if (!hasStarted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(() => {
          // Browser blocked autoplay, user will need to click the icon
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStarted]);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(() => {});
    }
  }, [isPlaying]);

  return { isPlaying, toggle };
};

export default useBackgroundMusic;
