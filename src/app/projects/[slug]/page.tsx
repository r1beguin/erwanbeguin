import styles from "./page.module.css";

import { Article } from '@/types/article';
import projects from '@/../public/projects.json';
import ContentCard from "@/components/basicComponents/ContentCard/ContentCard";
import IconButton from "@/components/basicComponents/iconButton/IconButton";
import { FaArrowLeft } from 'react-icons/fa';

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {

    const { slug } = await params
    const project: Article | undefined = projects.find((project) => project.slug === slug);

    return (
        <div className={styles.page}>
            <main className={styles.main}>

            <div className="contentHeader">
                <IconButton
                    icon={<FaArrowLeft color="var(--foreground)" />} 
                    tooltipText="Go back to projects"
                    backgroundColor="var(--primary-color)" 
                    width="40px" 
                    height="40px" 
                    nav="/projects"
                />
                <ContentCard
                    coverImage={project?.coverImage || ''}
                    title={project?.title || ''}
                    hook={project?.hook || ''}
                />
              <div className={styles.contentContainer} dangerouslySetInnerHTML={{ __html: project?.content || '' }} />
            </div>

            </main>
        </div>
    );
}
