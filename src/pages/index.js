import * as React from 'react';
import { Helmet } from 'react-helmet';

// styles
const pageStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        ></script>
      </Helmet>
      <div style={{ height: 400, width: 400 }}>
        <model-viewer
          src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948"
          alt="A 3D model of an astronaut"
          auto-rotate
          camera-controls
          style={{ width: '100%', height: '100%' }}
        ></model-viewer>
      </div>
    </main>
  );
};

export default IndexPage;
