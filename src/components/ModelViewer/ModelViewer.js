import React from 'react';
import '@google/model-viewer';

const ModelViewer = ({ src }) => {
  return (
    <model-viewer
      src={src}
      alt="A 3D model of an astronaut"
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '100%' }}
    ></model-viewer>
  );
};

export default ModelViewer;
