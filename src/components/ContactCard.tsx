import React from 'react';
import "../css/components/ContactCard.css";

interface ContactCardProps {
  type: string;
  value: string;
  link?: string;
  suggestion?: string;
}

// Mapping des types vers des emojis
const emojiMap: Record<string, string> = {
  'email': '📧',
  'whatsapp': '💚',
  'phone': '📱',
  'linkedin': '💼',
  'github': '🐙',
  'facebook': '📘',
  'telegram': '✈️',
  'instagram': '📷',
  'qrcode': '📲',
};

// Mapping pour les aria-labels (accessibilité)
const labelMap: Record<string, string> = {
  'email': 'Email',
  'whatsapp': 'WhatsApp',
  'phone': 'Téléphone',
  'linkedin': 'LinkedIn',
  'github': 'GitHub',
  'facebook': 'Facebook',
  'telegram': 'Telegram',
  'instagram': 'Instagram',
  'qrcode': 'QR Code',
};

const ContactCard: React.FC<ContactCardProps> = ({ type, value, link, suggestion }) => {
  const isAvailable = type.toLowerCase() !== 'instagram' && link;
  const iconType = type.toLowerCase();
  
  // Récupérer l'emoji correspondant, ou un emoji par défaut
  const emoji = emojiMap[iconType] || '📧';
  const ariaLabel = labelMap[iconType] || 'Contact';

  return (
    <div className="contact-card" data-type={type}>
      <div className="icon" role="img" aria-label={ariaLabel}>
        <span className="emoji-icon">{emoji}</span>
      </div>
      
      <div className="info">
        <h3>{type}</h3>
        
        {isAvailable ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            {value}
          </a>
        ) : (
          <span className="contact-value">{value}</span>
        )}
        
        {suggestion && (
          <p className="suggestion">{suggestion}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;