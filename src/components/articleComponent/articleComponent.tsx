"use client";"use client";

import React from 'react';
import styles from './articleComponent.module.css';
import Image from 'next/image';
import IconButton from '../basicComponents/iconButton/IconButton';
import { FaShare } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

import { Article } from '@/types/article';

interface ArticleComponentProps {
    data?: Article;
}

const ArticleComponent: React.FC<ArticleComponentProps> = ({ data }) => {
    return (
        <div className={styles.articleContainer}>
            {data && (
                <>
                    <div className={styles.header}>
                        <Image
                            src={data.coverImage}
                            alt={data.title}
                            className={styles.coverImage}
                            width={200}
                            height={100}
                        />
                        <div className={styles.contentHeader}>
                            <div className={styles.sharingButtons}>
                                <IconButton
                                    icon={<FaShare color="var(--foreground)" />}
                                    tooltipText="Share"
                                    backgroundColor="var(--primary-color)"
                                    width="40px"
                                    height="40px"
                                    nav="#"
                                />
                            </div>
                            <h1 className={styles.title}>{data.title}</h1>
                            <p className={styles.hook}>{data.hook}</p>
                        </div>
                    </div>
                    <div
                        className={styles.content}
                       
                    >
                        <ReactMarkdown>{data.content}</ReactMarkdown>

                    </div>
                </>
            )}
        </div>
    );
};

export default ArticleComponent;