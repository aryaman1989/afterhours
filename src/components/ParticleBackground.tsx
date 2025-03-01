
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Star properties
    const stars: Star[] = [];
    const STAR_COUNT = 200;
    const MAX_DEPTH = 1000;
    
    // Create stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * MAX_DEPTH,
        size: Math.random() * 1.5,
        color: getStarColor(),
        pulse: Math.random() * 0.1,
        pulseSpeed: 0.01 + Math.random() * 0.03
      });
    }
    
    function getStarColor() {
      const colors = [
        'rgba(255, 255, 255, 0.8)',  // White
        'rgba(190, 190, 255, 0.8)',  // Blue-ish
        'rgba(255, 190, 190, 0.7)',  // Red-ish
        'rgba(216, 180, 255, 0.7)'   // Purple-ish
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(2, 2, 3, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      stars.forEach((star) => {
        // Update star z-position to create movement
        star.z -= 0.2;
        
        // Reset star if it goes beyond the screen
        if (star.z <= 0) {
          star.z = MAX_DEPTH;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }
        
        // Calculate projected position
        const projectedX = (star.x / star.z) * 500 + centerX;
        const projectedY = (star.y / star.z) * 500 + centerY;
        
        // If star is on screen, draw it
        if (
          projectedX > 0 &&
          projectedX < canvas.width &&
          projectedY > 0 &&
          projectedY < canvas.height
        ) {
          // Size based on distance
          const projectedSize = (1 - star.z / MAX_DEPTH) * star.size * 2;
          
          // Opacity based on distance
          const opacity = (1 - star.z / MAX_DEPTH) * 0.8;
          
          // Pulse effect
          star.pulse += star.pulseSpeed;
          const pulse = Math.sin(star.pulse) * 0.2 + 0.8;
          
          // Draw star
          ctx.globalAlpha = opacity * pulse;
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw glow for brighter stars
          if (projectedSize > 1) {
            ctx.globalAlpha = opacity * 0.5 * pulse;
            ctx.filter = 'blur(1px)';
            ctx.beginPath();
            ctx.arc(projectedX, projectedY, projectedSize * 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.filter = 'none';
          }
          
          ctx.globalAlpha = 1;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

export default ParticleBackground;
