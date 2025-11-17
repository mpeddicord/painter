import { useEffect, useRef, useState } from 'react';
import './App.css'
import { createShaderProgram, initWebGL, loadImage, render } from './renderer/renderer';

function App() {
  const glRef = useRef(null);
  const programRef = useRef(null);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const gl = initWebGL('canvas');
    glRef.current = gl;

    const program = createShaderProgram(gl);
    programRef.current = program;

    const texture = loadImage(gl, '/landscape.jpg');
    setTexture(texture);
  }, []);

  useEffect(() => {
    if (!glRef.current || !programRef.current) {
      return;
    }

    let animationFrameId;

    const loop = () => {
      render(glRef.current, programRef.current, texture);
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [glRef.current, programRef.current, texture]);

  return (
    <main>
      <canvas id="canvas" width="800" height="600"></canvas>
    </main>
  )
}

export default App
