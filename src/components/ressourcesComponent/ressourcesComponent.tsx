"use client";

import React from 'react';
import styles from './ressourcesComponent.module.css';

const RessourcesComponent: React.FC = () => {

  return (
    <div className={styles.ressourcesList}>
      <h2>Ressources</h2>
      <ul className={styles.list}>
        <li>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Ressource 1
          </a>
        </li>
        <li>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Ressource 2
          </a>
        </li>
        <li>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Ressource 3
          </a>
        </li>
    </ul>

     
    </div>
  );
};

export default RessourcesComponent;