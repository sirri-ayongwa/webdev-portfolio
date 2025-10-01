import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  createdAt?: number;
}

interface Sphere {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorParticlesRef = useRef<Particle[]>([]);
  const spheresRef = useRef<Sphere[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize floating spheres
    const initSpheres = () => {
      spheresRef.current = [];
      for (let i = 0; i < 5; i++) {
        spheresRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 100 + 50,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.1 + 0.05,
        });
      }
    };
    initSpheres();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add cursor particle
      if (Math.random() > 0.7) {
        cursorParticlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          opacity: 1,
          createdAt: Date.now(),
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update spheres
      spheresRef.current.forEach((sphere) => {
        sphere.x += sphere.speedX;
        sphere.y += sphere.speedY;

        if (sphere.x < -sphere.radius) sphere.x = canvas.width + sphere.radius;
        if (sphere.x > canvas.width + sphere.radius) sphere.x = -sphere.radius;
        if (sphere.y < -sphere.radius) sphere.y = canvas.height + sphere.radius;
        if (sphere.y > canvas.height + sphere.radius) sphere.y = -sphere.radius;

        const gradient = ctx.createRadialGradient(
          sphere.x,
          sphere.y,
          0,
          sphere.x,
          sphere.y,
          sphere.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${sphere.opacity})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${sphere.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and update cursor particles
      const now = Date.now();
      cursorParticlesRef.current = cursorParticlesRef.current.filter((particle) => {
        const age = now - (particle.createdAt || 0);
        if (age > 5000) return false; // Remove after 5 seconds

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity = Math.max(0, 1 - age / 5000);

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticleBackground;
