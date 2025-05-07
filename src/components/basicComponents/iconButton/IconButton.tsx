"use client";

import React, { useState } from 'react';
import styles from './iconButton.module.css';
import { useRouter } from 'next/navigation';

interface IconButtonProps {
  icon: React.ReactNode; // Icône à afficher
  tooltipText: string; // Texte de l'infobulle
  backgroundColor?: string; // Couleur de fond du bouton
  width?: string; // Largeur du bouton
  height?: string; // Hauteur du bouton
  onClick?: () => void; // Action au clic
  nav?: string; // URL de navigation
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  tooltipText,
  backgroundColor = 'var(--foreground)', 
  width,
  height,
  onClick,
  nav,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <button
        className={styles.button}
        style={{ backgroundColor, width, height }}
        onClick={nav ? () => router.push(nav) : onClick}
      >
        {icon}
      </button>
      {showTooltip && <div className={styles.tooltip}>{tooltipText}</div>}
    </div>
  );
};

export default IconButton;