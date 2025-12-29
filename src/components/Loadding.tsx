import React from 'react';
import '../css/components/Loadding.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-card">
        <div className="loading-avatar shimmer"></div>
        <div className="loading-lines">
          <div className="loading-line short shimmer"></div>
          <div className="loading-line shimmer"></div>
          <div className="loading-line shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
