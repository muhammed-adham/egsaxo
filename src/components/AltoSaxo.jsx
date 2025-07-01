import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

const AltoSaxo = () => {
  const modelRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false); // in-memory only

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
          setHasAnimated(true); // no more animations in this session
        }
      };

      requestAnimationFrame(animate);
    };

    model.addEventListener('load', onLoad);
    return () => {
      model.removeEventListener('load', onLoad);
    };
  }, [hasAnimated]);

  return (
    <model-viewer
      ref={modelRef}
      src="/saxophone_alto.glb"
      alt="Soulpiece"
      camera-orbit="-180deg 120deg 100m"
      environment-image="legacy" // or "legacy", "studio", or a custom HDR
      style={{
        // filter: 'grayscale(30%)', // makes it black and white
        filter: 'brightness(.8) saturate(0) contrast(10) grayscale(100%)',
        position: 'absolute',
        left: '-24rem',
        bottom: '-8rem',
        width: '100%',
        height: '74rem',
        transform:"rotate(-10deg)"
      }}
    ></model-viewer>
  );
};

export default AltoSaxo;
