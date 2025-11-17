import { useEffect } from 'react';
import './App.css'
import { initWebGL } from './renderer/renderer';

function App() {
  useEffect(() => {
    initWebGL('canvas');
  }, []);

  return (
    <main>
      <canvas id="canvas" width="800" height="600"></canvas>
    </main>
  )
}

export default App
