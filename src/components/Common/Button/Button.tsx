import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
  active?: boolean;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ active, to, onClick, children }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.button} ${active ? styles.active : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
