import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import ModelViewer from '../components/ModelViewer';

const pageStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const wrapperStyles = {
  border: '1px solid red',
  marginRight: 30,
  width: 400,
  height: 400,
};

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativePath: { eq: "windfarm - 1.glb" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  const modelSrc = data.allFile.nodes[0].publicURL;

  return (
    <main style={pageStyles}>
      <Helmet>
        {/* <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        ></script> */}
      </Helmet>
      <div style={wrapperStyles}>
        <ModelViewer src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948" />
      </div>
      <div style={wrapperStyles}>
        <ModelViewer src={modelSrc} />
      </div>
    </main>
  );
};

export default IndexPage;
