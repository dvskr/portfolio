'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroGraphic() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        // Set resolution
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        interface Node {
            x: number;
            y: number;
            type: 'source' | 'process' | 'sink';
            label?: string;
        }

        // Define Pipeline Nodes
        const nodes: Node[] = [
            // Sources (Left)
            { x: 0.15, y: 0.3, type: 'source' },
            { x: 0.15, y: 0.5, type: 'source' },
            { x: 0.15, y: 0.7, type: 'source' },

            // Processors (Middle)
            { x: 0.4, y: 0.4, type: 'process' },
            { x: 0.4, y: 0.6, type: 'process' },

            { x: 0.6, y: 0.5, type: 'process' },

            // Sinks (Right)
            { x: 0.85, y: 0.3, type: 'sink' },
            { x: 0.85, y: 0.5, type: 'sink' },
            { x: 0.85, y: 0.7, type: 'sink' },
        ];

        const connections = [
            [0, 3], [1, 3], [1, 4], [2, 4], // Sources -> Processors
            [3, 5], [4, 5],                 // Processors -> Aggregator
            [5, 6], [5, 7], [5, 8]          // Aggregator -> Sinks
        ];

        interface Particle {
            path: number[]; // Indices of nodes in the path
            currentSegment: number; // Index in path array
            progress: number; // 0 to 1 along current segment
            speed: number;
        }

        const particles: Particle[] = [];

        // Precompute paths
        const possiblePaths = [
            [0, 3, 5, 6], [0, 3, 5, 7], [0, 3, 5, 8],
            [1, 3, 5, 6], [1, 3, 5, 7], [1, 4, 5, 8],
            [2, 4, 5, 6], [2, 4, 5, 7], [2, 4, 5, 8]
        ];

        const initParticles = () => {
            for (let i = 0; i < 15; i++) {
                spawnParticle(Math.random());
            }
        };

        const spawnParticle = (initialProgress = 0) => {
            const pathIndex = Math.floor(Math.random() * possiblePaths.length);
            particles.push({
                path: possiblePaths[pathIndex],
                currentSegment: 0,
                progress: initialProgress,
                speed: 0.005 + Math.random() * 0.01
            });
        };

        const drawNode = (node: Node, px: number, py: number) => {
            ctx.beginPath();
            ctx.arc(px, py, 6, 0, Math.PI * 2);

            if (node.type === 'source') ctx.fillStyle = '#64ffda';
            else if (node.type === 'sink') ctx.fillStyle = '#64ffda';
            else ctx.fillStyle = '#112240'; // Navy Light for processors

            ctx.fill();
            ctx.strokeStyle = '#64ffda';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(100, 255, 218, 0.5)';
            ctx.fill();
            ctx.shadowBlur = 0;
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Connections
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(100, 255, 218, 0.15)';
            connections.forEach(([start, end]) => {
                const p1 = nodes[start];
                const p2 = nodes[end];
                ctx.beginPath();
                ctx.moveTo(p1.x * width, p1.y * height);
                ctx.lineTo(p2.x * width, p2.y * height);
                ctx.stroke();
            });

            // Draw Nodes
            nodes.forEach(node => {
                drawNode(node, node.x * width, node.y * height);
            });

            // Update & Draw Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.progress += p.speed;

                if (p.progress >= 1) {
                    p.progress = 0;
                    p.currentSegment++;
                    if (p.currentSegment >= p.path.length - 1) {
                        particles.splice(i, 1);
                        spawnParticle();
                        continue;
                    }
                }

                const startNodeIdx = p.path[p.currentSegment];
                const endNodeIdx = p.path[p.currentSegment + 1];
                const startNode = nodes[startNodeIdx];
                const endNode = nodes[endNodeIdx];

                const x = startNode.x * width + (endNode.x * width - startNode.x * width) * p.progress;
                const y = startNode.y * height + (endNode.y * height - startNode.y * height) * p.progress;

                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#64ffda';
                ctx.fill();

                // Trail
                ctx.beginPath();
                ctx.moveTo(x, y);
                // A simple trail effect could be added here by keeping history, 
                // but for simplicity/performance we keep it as a neat dot.
            }

            requestAnimationFrame(animate);
        };

        initParticles();
        const animId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-[400px] md:h-[600px] relative flex items-center justify-center opacity-80"
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </motion.div>
    );
}
