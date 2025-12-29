import React from 'react';

const PDFViewer = () => {
  return (
    <div style={{ height: '100vh' }}>
      <iframe
        src="/doc/gentil_le_noir_c_v.pdf"
        title="CV de Gentil Le Noir"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PDFViewer;
