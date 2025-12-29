import React from 'react';
import "../../css/components/buttons/PrimaryButton.css";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, type = 'button' }) => (
  <button className="primary-btn" onClick={onClick} type={type}>
    {children}
  </button>
);

export default PrimaryButton;
