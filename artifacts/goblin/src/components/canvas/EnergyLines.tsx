import { useEffect, useRef } from 'react';

export function EnergyLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Track mouse position
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Line segments
    const lines: { angle: number, speed: number, length: number, thickness: number, hue: number }[] = [];
    for (let i = 0; i < 40; i++) {
      lines.push({
        angle: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.003,
        length: 100 + Math.random() * 300,
        thickness: 0.5 + Math.random() * 1.5,
        hue: Math.random() > 0.5 ? 152 : 190 // Primary (green) or Secondary (blue)
      });
    }

    const render = () => {
      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.fillStyle = 'rgba(7, 7, 13, 0.2)'; // Faint trail effect matching background
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      lines.forEach(line => {
        line.angle += line.speed;
        
        // Calculate base end point based on rotation
        const endX = centerX + Math.cos(line.angle) * line.length;
        const endY = centerY + Math.sin(line.angle) * line.length;

        // Influence end point by mouse position if within range
        const dx = mouseX - endX;
        const dy = mouseY - endY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let finalX = endX;
        let finalY = endY;
        
        const influenceRadius = 400;
        if (dist < influenceRadius) {
          const force = (influenceRadius - dist) / influenceRadius;
          finalX += dx * force * 0.3;
          finalY += dy * force * 0.3;
        }

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        // Use a bezier curve to make it look like an energy tether
        const cp1x = centerX + (finalX - centerX) * 0.5;
        const cp1y = centerY;
        const cp2x = finalX;
        const cp2y = centerY + (finalY - centerY) * 0.5;
        
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, finalX, finalY);

        ctx.strokeStyle = `hsla(${line.hue}, 100%, 50%, 0.15)`;
        ctx.lineWidth = line.thickness;
        ctx.stroke();

        // Draw particle at the end
        ctx.beginPath();
        ctx.arc(finalX, finalY, line.thickness * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${line.hue}, 100%, 50%, 0.8)`;
        ctx.fill();
        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${line.hue}, 100%, 50%, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}
