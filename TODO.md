# Todo List

## Core Essential Features

### Rendering
- [x] Initialize WebGL2 context.
- [x] Create a shader program for drawing textures.
- [x] Implement a render loop.
- [ ] Support for float/half-float textures for HDR.

### Image format & pipeline
- [x] Load and display common image formats (JPEG, PNG).
- [ ] Implement fragment shaders for basic blend modes (Normal, Multiply, Screen).
- [ ] Implement fragment shaders for essential adjustment layers (Brightness/Contrast, HSL).

### Processing
- [ ] Set up WebAssembly with a simple test case (e.g., grayscale conversion).
- [ ] Implement a message-passing system between the main thread and Web Workers.

### UI
- [ ] Choose and integrate a UI framework (React, Vue, or Svelte).
- [ ] Create a basic layout with a canvas, toolbar, and layer panel.
- [ ] Implement basic tools: Move, Zoom, Pan.

### Storage / history
- [ ] Design a document model for layers, masks, and adjustments.
- [ ] Implement a history stack for undo/redo operations.
- [ ] Serialize and deserialize the document model to save/load projects.

## Nice-to-Have Features

### Rendering
- [ ] Explore and implement WebGPU for rendering.
- [ ] Add support for more complex shader effects (e.g., gaussian blur, sharpening).

### Image format & pipeline
- [ ] Support for more blend modes (Overlay, Soft Light, etc.).
- [ ] Add more adjustment layers (Curves, Levels).
- [ ] Implement a non-destructive editing pipeline.
- [ ] Support for RAW image formats.

### Processing
- [ ] Offload more complex operations to WebAssembly (e.g., smart selections, content-aware fill).
- [ ] Optimize data transfer between the main thread and workers.

### UI
- [ ] Implement more advanced tools: Brush, Eraser, Gradient, Text.
- [ ] Add support for custom brushes and textures.
- [ ] Use a canvas library (Konva/Fabric) for vector overlays and UI elements.
- [ ] Implement a more polished and user-friendly UI.
- [ ] Real-time collaboration features.

### Storage / history
- [ ] Implement autosave and recovery.
- [ ] Add support for versioning and branching of projects.
- [ ] Cloud storage integration (e.g., Google Drive, Dropbox).
