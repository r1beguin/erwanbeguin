"use client";

import React from 'react';
import styles from './ContentCard.module.css';
import Image from 'next/image';

interface ContentCardProps {
  coverImage: string; // URL of the cover picture
  title: string; // Title of the content
  hook: string; // Short description or hook text
  onClick?: () => void; // Optional click handler
}

const ContentCard: React.FC<ContentCardProps> = ({ coverImage, title, hook, onClick }) => {
return (
    <div className={styles.card} onClick={onClick}>
        <Image 
            src={coverImage} 
            alt={title} 
            className={styles.coverImage}
            width={200}
            height={100} />
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.hook}>{hook}</p>
        </div>
    </div>
);
};

export default ContentCard;