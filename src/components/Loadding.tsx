import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/components/Loadding.css';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.warn('Loading timeout - redirecting to home');
      navigate('/');
    }, 10000); // 10 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

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
      <p className="loading-timeout" style={{
        marginTop: '1rem',
        fontSize: '0.85rem',
        opacity: 0.7,
        textAlign: 'center'
      }}>
        Chargement... (redirection si trop long)
      </p>
    </div>
  );
};

export default Loading;
