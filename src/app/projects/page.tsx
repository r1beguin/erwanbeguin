"use client";

import styles from "./page.module.css";
import ContentCard from "@/components/basicComponents/ContentCard/ContentCard";
import IconButton from "@/components/basicComponents/iconButton/IconButton";
import { FaArrowLeft } from 'react-icons/fa';

import projects from "@/../public/projects.json";

export default function Page() {

    return (
        <div className={styles.page}>
            <main className={styles.main}>

                <div className={styles.contentContainer}>
                    <IconButton
                        icon={<FaArrowLeft color="var(--foreground)" />} 
                        tooltipText="Go back to home"
                        backgroundColor="var(--primary-color)" 
                        width="40px" 
                        height="40px" 
                        nav="/"
                    />
                    {projects.map((article, index) => (
                        <ContentCard
                            key={index}
                            coverImage={article.coverImage}
                            title={article.title}
                            hook={article.hook}
                            onClick={() => window.location.href = "/projects/" + article.slug}
                        />
                    ))}                   
                </div>

            </main>
        </div>
    );
}