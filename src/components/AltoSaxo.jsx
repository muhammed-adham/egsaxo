import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import '@google/model-viewer';
import './AltoSaxo.css'

const AltoSaxo = forwardRef((props, ref) => {
  const modelRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSpinning, setIsSpinning] = useState(false);
  const animationFrameRef = useRef();
  const currentRotationRef = useRef({ azimuth: -60, elevation: 120 });
  const targetRotationRef = useRef({ azimuth: -60, elevation: 120 });

  useEffect(() => {
    const model = modelRef.current;
    if (!model || hasAnimated) return;

    const finalAzimuth = -60;
    const finalElevation = 120;
    const radius = 100;

    const onLoad = () => {
      let startAzimuth = 90;
      let startElevation = 90;
      const duration = 1200;
      const startTime = performance.now();

      const easeOut = (t) => 1 - Math.pow(1 - t, 3);

      const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOut(progress);

        const currentAzimuth = startAzimuth + (finalAzimuth - startAzimuth) * eased;
        const currentElevation = startElevation + (finalElevation - startElevation) * eased;

        model.setAttribute(
          'camera-orbit',
          `${currentAzimuth.toFixed(2)}deg ${currentElevation.toFixed(2)}deg ${radius}m`
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          model.setAttribute('camera-orbit', `${finalAzimuth}deg ${finalElevation}deg ${radius}m`);
          currentRotationRef.current = { azimuth: finalAzimuth, elevation: finalElevation };
          targetRotationRef.current = { azimuth: finalAzimuth, elevation: finalElevation };
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    };

    model.addEventListener('load', onLoad);
    return () => {
      model.removeEventListener('load', onLoad);
    };
  }, [hasAnimated]);

  // Mouse tracking effect
  useEffect(() => {
    if (isSpinning) return; // Disable mouse tracking during spin
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // -1 to 1
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isSpinning]);

  // Smooth rotation following mouse
  useEffect(() => {
    if (!hasAnimated || isSpinning) return; // Disable during spin
    const model = modelRef.current;
    if (!model) return;

    // Calculate target rotation based on mouse position
    const baseAzimuth = -60;
    const baseElevation = 120;
    const maxRotationRange = 12; // degrees of rotation in each direction
    
    // Invert Y axis for more natural feeling
    const targetAzimuth = baseAzimuth + (mousePosition.x * maxRotationRange);
    const targetElevation = baseElevation + (-mousePosition.y * maxRotationRange * 0.5); // Less vertical movement
    
    targetRotationRef.current = { 
      azimuth: targetAzimuth, 
      elevation: Math.max(90, Math.min(150, targetElevation)) // Clamp elevation
    };

    // Smooth interpolation
    const smoothRotation = () => {
      const current = currentRotationRef.current;
      const target = targetRotationRef.current;
      
      // Lerp factor - lower = smoother/slower
      const lerpFactor = 0.05;
      
      const newAzimuth = current.azimuth + (target.azimuth - current.azimuth) * lerpFactor;
      const newElevation = current.elevation + (target.elevation - current.elevation) * lerpFactor;
      
      currentRotationRef.current = { azimuth: newAzimuth, elevation: newElevation };
      
      model.setAttribute(
        'camera-orbit',
        `${newAzimuth.toFixed(2)}deg ${newElevation.toFixed(2)}deg 100m`
      );
      
      // Continue animation if we haven't reached the target
      const azimuthDiff = Math.abs(target.azimuth - newAzimuth);
      const elevationDiff = Math.abs(target.elevation - newElevation);
      
      if (azimuthDiff > 0.1 || elevationDiff > 0.1) {
        animationFrameRef.current = requestAnimationFrame(smoothRotation);
      }
    };

    // Cancel previous animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(smoothRotation);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, hasAnimated, isSpinning]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    spin: () => {
      const model = modelRef.current;
      if (!model) return;
      setIsSpinning(true);
      const startAzimuth = currentRotationRef.current.azimuth;
      const finalAzimuth = startAzimuth + 360;
      const elevation = currentRotationRef.current.elevation;
      const radius = 100;
      const duration = 1200;
      const startTime = performance.now();
      const easeInOut = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOut(progress);
        const currentAzimuth = startAzimuth + (finalAzimuth - startAzimuth) * eased;
        model.setAttribute('camera-orbit', `${currentAzimuth.toFixed(2)}deg ${elevation.toFixed(2)}deg ${radius}m`);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          currentRotationRef.current.azimuth = (startAzimuth + 360) % 360;
          setIsSpinning(false);
        }
      }
      requestAnimationFrame(animate);
    }
  }));

  return (
    <div className="model__container" style={{
      
    }}>
      <model-viewer
        ref={modelRef}
        src="/saxophone_alto.glb"
        alt="Soulpiece"
        camera-orbit="-180deg 120deg 100m"
        environment-image="legacy"
        
        style={{
          filter: 'brightness(.8) saturate(0) contrast(10) grayscale(100%)',
          width: '100%',
          height: '74rem',
          position: 'absolute',
          bottom: '-6rem',
          transform: "rotate(-10deg)"
        }}
      ></model-viewer>
    </div>
  );
});

export default AltoSaxo;