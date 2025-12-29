import React, { useRef, useEffect, useState } from 'react';
import "../css/components/ContactForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Simulation de tracking des visiteurs
  useEffect(() => {
    const simulateTracking = async () => {
      try {
        const timestamp = new Date().toISOString();
        const userAgent = navigator.userAgent;
        const currentPage = 'contact';

        // Simulation de récupération d'IP
        let ip = 'simulated-ip-' + Math.random().toString(36).substr(2, 9);
        try {
          const ipRes = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipRes.json();
          ip = ipData.ip;
        } catch (ipError) {
          console.log('Utilisation IP simulée');
        }

        // Simulation de géolocalisation
        const geoData = {
          country_name: 'Simulated Country',
          city: 'Simulated City',
          region: 'Simulated Region'
        };

        // Données simulées du visiteur
        const visitorData = {
          time: timestamp,
          ue: userAgent,
          ip: ip,
          country: geoData.country_name,
          city: geoData.city,
          region: geoData.region,
          page: currentPage,
          device: {
            screen: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language
          },
          simulated: true
        };

        console.log('🔍 Simulation de tracking:', visitorData);

        // Simulation d'envoi au serveur
        const shouldSucceed = Math.random() > 0.2; // 80% de succès
        if (shouldSucceed) {
          console.log('✅ Tracking simulé avec succès');
        } else {
          console.log('⚠️ Tracking simulé échoué (simulation)');
        }

      } catch (error) {
        console.log("⚠️ Erreur de tracking simulée:", error);
      }
    };

    simulateTracking();
  }, []);

  // Simulation d'envoi du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsLoading(true);
    setButtonState('loading');

    try {
      // Simulation de délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Récupération des données du formulaire
      const formData = new FormData(form.current);
      const formValues = {
        name: formData.get('user_name'),
        email: formData.get('user_email'),
        message: formData.get('message')
      };

      console.log('📨 Simulation envoi formulaire:', formValues);

      // Simulation de réponse du serveur (90% de succès)
      const shouldSucceed = Math.random() > 0.1;
      
      if (shouldSucceed) {
        setButtonState('success');
        toast.success('🎉 Message envoyé avec succès ! (Simulation)', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Simulation d'envoi email
        console.log('📧 Email simulé envoyé à: gentillenoir075@outlook.com');
        console.log('📝 Contenu:', formValues.message);
        
        // Réinitialiser après succès
        setTimeout(() => {
          form.current?.reset();
          setButtonState('idle');
        }, 2000);
      } else {
        // Simulation d'erreur
        const errors = [
          'Erreur de connexion au serveur',
          'Timeout de la requête',
          'Erreur de validation des données',
          'Service temporairement indisponible'
        ];
        const randomError = errors[Math.floor(Math.random() * errors.length)];
        throw new Error(randomError);
      }

    } catch (error) {
      setButtonState('error');
      
      // Message d'erreur personnalisé pour la simulation
      const errorMessage = error.message.includes('serveur') 
        ? '❌ Serveur simulé non disponible. En production, le message serait envoyé à gentillenoir075@outlook.com'
        : '❌ ' + error.message + ' (Simulation)';
      
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Réinitialiser après erreur
      setTimeout(() => {
        setButtonState('idle');
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonText = () => {
    switch (buttonState) {
      case 'loading':
        return '⏳  envoi...';
      case 'success':
        return '✅ Message envoyé !';
      case 'error':
        return '❌ Erreur';
      default:
        return '📤 envoyer le message';
    }
  };

  const getButtonTitle = () => {
    return buttonState === 'idle' 
      ? "Mode simulation - En production, le message serait envoyé à gentillenoir075@outlook.com"
      : undefined;
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="contact-form">
      <h3>Envoyez un message à Gentil</h3>
      
      <div style={{
        background: 'rgba(56, 189, 248, 0.1)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        borderRadius: '8px',
        padding: '0.8rem',
        marginBottom: '1rem',
        fontSize: '0.9rem',
        textAlign: 'center'
      }}>
      </div>
      
      <input 
        type="text" 
        name="user_name" 
        placeholder="👤 Votre nom complet" 
        required 
        disabled={isLoading}
      />
      
      <input 
        type="email" 
        name="user_email" 
        placeholder="📧 Votre email" 
        required 
        disabled={isLoading}
      />
      
      <textarea 
        name="message" 
        placeholder="💬 Votre message..." 
        rows={5}
        required 
        disabled={isLoading}
      />
      
      <button 
        type="submit" 
        className={buttonState !== 'idle' ? buttonState : ''}
        disabled={isLoading}
        title={getButtonTitle()}
      >
        {getButtonText()}
      </button>
      
      <div style={{
        fontSize: '0.8rem',
        color: '#94a3b8',
        textAlign: 'center',
        marginTop: '0.5rem'
      }}>
      </div>
      
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};

export default ContactForm;