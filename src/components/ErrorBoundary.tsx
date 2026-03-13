import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Lazy route error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const fallback = this.props.fallback || (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h2 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>Erreur de chargement</h2>
          <p>Une erreur s'est produite lors du chargement de la page.</p>
          <button 
            onClick={this.resetError}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: '#4ecdc4',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Réessayer
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
            <a href="/" style={{ color: '#4ecdc4' }}>Retour à l'accueil</a>
          </p>
        </div>
      );

      return fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
