"use client";

import React from 'react';
import ContentCard from '@/components/basicComponents/ContentCard/ContentCard';
import IconButton from '../basicComponents/iconButton/IconButton';
import styles from './HomeCardList.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import articles from '@/../public/articles.json';
import projects from '@/../public/projects.json';

interface HomeCardListProps {
  title: string; 
  link?: string; // Link to navigate when the button is clicked
  type?: string; // Type of the card list (e.g., "projects", "blog")
}

const HomeCardList: React.FC<HomeCardListProps> = ({ title, link, type }) => {
  const router = useRouter()

  return (
    <div className={styles.cardList}>
      <h2>{title}</h2>
      <div className={styles.cardsContainer}>
        {type === "projects" ? (
          projects.slice(-2).map((card, index) => (
            <ContentCard
              key={index}
              coverImage={card.coverImage}
              title={card.title}
              hook={card.hook}
              onClick={() => router.push(link + "/" + card.slug)}
            />
          ))
        ) : (
          articles.slice(-2).map((card, index) => (
            <ContentCard
              key={index}
              coverImage={card.coverImage}
              title={card.title}
              hook={card.hook}
              onClick={() => router.push(link + "/" + card.slug)}
            />
          ))
        )}
      </div>

      {/* Add IconButton at the bottom-right corner */}
      {link && (
        <div className={styles.iconButtonContainer}>
          <IconButton
            icon={<FaArrowRight color="var(--foreground)"/>}
            tooltipText="Go to more articles"
            backgroundColor="var(--background)"
            onClick={() => router.push(link)}
            width="50px"
            height="50px"
          />
        </div>
      )}
    </div>
  );
};

export default HomeCardList;