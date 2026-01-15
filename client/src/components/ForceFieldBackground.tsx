import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface ForceFieldBackgroundProps {
  imageUrl?: string;
  hue?: number;
  saturation?: number;
  threshold?: number;
  minStroke?: number;
  maxStroke?: number;
  spacing?: number;
  noiseScale?: number;
  density?: number;
  invertImage?: boolean;
  invertWireframe?: boolean;
  magnifierEnabled?: boolean;
  magnifierRadius?: number;
  forceStrength?: number;
  friction?: number;
  restoreSpeed?: number;
  className?: string;
}

export function ForceFieldBackground({
  // Using a tech/abstract landscape for the base image
  imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  hue = 190, // Cyan/Blue hue for futuristic look
  saturation = 80,
  threshold = 100,
  minStroke = 1,
  maxStroke = 3,
  spacing = 15, // Wider spacing for performance and cleaner look
  density = 2.0,
  invertImage = false,
  magnifierRadius = 200,
  forceStrength = 20,
  friction = 0.85,
  restoreSpeed = 0.1,
  className = "",
}: ForceFieldBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Cleanup previous instance
    if (p5InstanceRef.current) {
      p5InstanceRef.current.remove();
      p5InstanceRef.current = null;
    }

    const sketch = (p: p5) => {
      let originalImg: p5.Image;
      let points: any[] = [];
      let palette: p5.Color[] = [];

      p.preload = () => {
        // Load image with CORS handling
        p.loadImage(
          imageUrl, 
          (img) => { 
            originalImg = img; 
            // Trigger setup logic once image is loaded if setup already ran
            if (p.width > 0) initializePoints();
          }, 
          () => console.error("Failed to load image")
        );
      };

      const initializePoints = () => {
        if (!originalImg) return;
        
        // Resize image to fit canvas
        originalImg.resize(p.width, p.height);
        originalImg.loadPixels();
        
        // Generate neon palette
        palette = [];
        p.colorMode(p.HSB);
        // Primary cyan/blue colors
        palette.push(p.color(hue, saturation, 100));
        palette.push(p.color(hue + 20, saturation, 90));
        // Accent purple
        palette.push(p.color(260, saturation, 100));

        // Generate points based on image brightness
        points = [];
        for (let x = 0; x < p.width; x += spacing) {
          for (let y = 0; y < p.height; y += spacing) {
            // Calculate pixel index safely
            const px = Math.floor(x);
            const py = Math.floor(y);
            const i = (px + py * originalImg.width) * 4;
            
            if (i >= 0 && i < originalImg.pixels.length - 4) {
              const r = originalImg.pixels[i];
              const g = originalImg.pixels[i + 1];
              const b = originalImg.pixels[i + 2];
              const brightness = (r + g + b) / 3;
              
              // Only create points in brighter areas (or darker if inverted)
              const val = invertImage ? 255 - brightness : brightness;
              
              if (val > threshold) {
                // Add randomness for organic distribution
                if (p.random(100) < density * 30) {
                  points.push({
                    pos: p.createVector(x, y),
                    originalPos: p.createVector(x, y),
                    vel: p.createVector(0, 0),
                    color: p.random(palette),
                    strokeWeight: p.map(brightness, 0, 255, minStroke, maxStroke)
                  });
                }
              }
            }
          }
        }
      };

      p.setup = () => {
        p.createCanvas(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
        initializePoints();
      };

      p.draw = () => {
        p.clear();
        p.noFill();
        
        // Check if points are initialized
        if (points.length === 0) return;

        points.forEach(pt => {
          // Force field physics based on mouse position
          const mouse = p.createVector(p.mouseX, p.mouseY);
          const d = p5.Vector.dist(mouse, pt.pos);
          
          if (d < magnifierRadius) {
            const force = p5.Vector.sub(pt.pos, mouse);
            force.setMag(p.map(d, 0, magnifierRadius, forceStrength, 0));
            pt.vel.add(force);
          }

          // Return to original position
          const restore = p5.Vector.sub(pt.originalPos, pt.pos);
          restore.mult(restoreSpeed);
          pt.vel.add(restore);
          
          // Apply friction
          pt.vel.mult(friction);
          pt.pos.add(pt.vel);

          // Draw point
          p.stroke(pt.color);
          p.strokeWeight(pt.strokeWeight);
          p.point(pt.pos.x, pt.pos.y);
        });
      };
      
      p.windowResized = () => {
          if (containerRef.current) {
            p.resizeCanvas(containerRef.current.clientWidth, containerRef.current.clientHeight);
            initializePoints();
          }
      }
    };

    p5InstanceRef.current = new p5(sketch, containerRef.current);

    return () => {
      p5InstanceRef.current?.remove();
    };
  }, [imageUrl, hue, saturation, spacing, forceStrength, magnifierRadius, threshold]);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 z-0 pointer-events-auto ${className}`}
      style={{ background: 'linear-gradient(to bottom, #020617, #0f172a)' }} 
    />
  );
}
