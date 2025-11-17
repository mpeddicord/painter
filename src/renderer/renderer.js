export function initWebGL(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error(`Canvas with id ${canvasId} not found.`);
    return null;
  }

  const gl = canvas.getContext('webgl2');
  if (!gl) {
    console.error('WebGL2 not supported.');
    return null;
  }

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  return gl;
}
