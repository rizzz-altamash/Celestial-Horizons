// BEST ---------------------------------------------------------------------------------------------------
// import React, { useRef, useEffect } from 'react';

// const NightSkyCanvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = [];
//     const shootingStars = [];

//     // Generate stars
//     for (let i = 0; i < 200; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 0.7,
//         opacity: Math.random() * 0.8 + 0.2,
//       });
//     }

//     const drawBackground = () => {
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       gradient.addColorStop(0, "black");
//       gradient.addColorStop(0.15, "black");
//       gradient.addColorStop(0.6, "#1D2460"); // #001a4d
//       gradient.addColorStop(1, "#1E1A4D"); // #003366
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     };

//     const drawStars = () => {
//       ctx.fillStyle = 'white';
//       stars.forEach(star => {
//         ctx.globalAlpha = star.opacity;
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.globalAlpha = 1;
//       });
//     };

//     const generateShootingStar = () => {
//       shootingStars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height * 0.3,
//         size: Math.random() * 3 + 1,
//         speed: Math.random() * 4 + 2,
//         trailLength: Math.random() * 80 + 50,
//       });
//     };

//     setInterval(generateShootingStar, 2500);

//     const drawShootingStars = () => {
//       shootingStars.forEach((star, index) => {
//         ctx.strokeStyle = 'white';
//         ctx.lineWidth = 2;
//         ctx.globalAlpha = 0.8;
//         ctx.beginPath();
//         ctx.moveTo(star.x, star.y);
//         ctx.lineTo(star.x - star.trailLength, star.y + star.trailLength);
//         ctx.stroke();
//         ctx.globalAlpha = 1;
//         star.x -= star.speed;
//         star.y += star.speed;
//         if (star.x < 0 || star.y > canvas.height) shootingStars.splice(index, 1);
//       });
//     };

//     const animate = () => {
//       drawBackground();
//       drawStars();
//       drawShootingStars();
//       requestAnimationFrame(animate);
//     };

//     animate();
//     window.addEventListener('resize', () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     });
//   }, []);

//   return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
// };

// export default NightSkyCanvas;
























// PERFECT -------------------------------------------------------------------------------------------
// import React, { useRef, useEffect } from 'react';

// const NightSkyCanvas = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = [];
//     const shootingStars = [];

//     // Generate stars
//     for (let i = 0; i < 200; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2,
//         opacity: Math.random() * 0.8 + 0.2,
//       });
//     }

//     const drawBackground = () => {
//       const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       gradient.addColorStop(0, "black");
//       gradient.addColorStop(0.5, "#001a4d");
//       gradient.addColorStop(1, "#003366");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     };

//     const drawStars = () => {
//       ctx.fillStyle = 'white';
//       stars.forEach(star => {
//         ctx.globalAlpha = star.opacity;
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.globalAlpha = 1;
//       });
//     };

//     const generateShootingStar = () => {
//       shootingStars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height * 0.3,
//         size: Math.random() * 3 + 1,
//         speed: Math.random() * 1 + 2,
//         trailLength: Math.random() * 80 + 50,
//       });
//     };

//     setInterval(generateShootingStar, 2500);

//     const drawShootingStars = () => {
//       shootingStars.forEach((star, index) => {
//         // Glowing head
//         // const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
//         // glowGradient.addColorStop(0, "rgba(255,255,255,1)");
//         // glowGradient.addColorStop(1, "rgba(255,255,255,0)");
//         // ctx.fillStyle = glowGradient;
//         // ctx.beginPath();
//         // ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
//         // ctx.fill();

//         // Trail
//         const trailGradient = ctx.createLinearGradient(star.x, star.y, star.x + star.trailLength, star.y - star.trailLength);
//         trailGradient.addColorStop(0, "rgba(255,255,255,0.8)");
//         trailGradient.addColorStop(1, "rgba(255,255,255,0)");
//         ctx.strokeStyle = trailGradient;
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         ctx.moveTo(star.x, star.y);
//         ctx.lineTo(star.x + star.trailLength, star.y - star.trailLength);
//         ctx.stroke();

//         // Update star position
//         star.x -= star.speed;
//         star.y += star.speed;
//         if (star.x < 0 || star.y > canvas.height) shootingStars.splice(index, 1);
//       });
//     };

//     const animate = () => {
//       drawBackground();
//       drawStars();
//       drawShootingStars();
//       requestAnimationFrame(animate);
//     };

//     animate();
//     window.addEventListener('resize', () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     });
//   }, []);

//   return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
// };

// export default NightSkyCanvas;



























// PERFECT with Disappering ---------------------------------------------------------------
import React, { useRef, useEffect } from 'react';

const NightSkyCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const shootingStars = [];

    // Generate stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.7,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "black");
      gradient.addColorStop(0.15, "black");
      gradient.addColorStop(0.55, "#1D2460"); // #001a4d
      gradient.addColorStop(1, "#1E1A4D"); // #003366
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = () => {
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    };

    const generateShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.3,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 1,
        trailLength: Math.random() * 80 + 50,
        opacity: 1,
      });
    };

    setInterval(generateShootingStar, 2500);

    const drawShootingStars = () => {
      shootingStars.forEach((star, index) => {
        // Fade out starts when reaching 60% of canvas height
        if (star.y > canvas.height * 0.6) {
          star.opacity -= 0.01;
          if (star.opacity <= 0) {
            shootingStars.splice(index, 1);
            return;
          }
        }

        // Glowing head
        // const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        // glowGradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
        // glowGradient.addColorStop(1, "rgba(255,255,255,0)");
        // ctx.fillStyle = glowGradient;
        // ctx.beginPath();
        // ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        // ctx.fill();

        // Trail
        const trailGradient = ctx.createLinearGradient(star.x, star.y, star.x + star.trailLength, star.y - star.trailLength);
        trailGradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
        trailGradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.trailLength, star.y - star.trailLength);
        ctx.stroke();

        // Update star position
        star.x -= star.speed;
        star.y += star.speed;
      });
    };

    const animate = () => {
      drawBackground();
      drawStars();
      drawShootingStars();
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default NightSkyCanvas;