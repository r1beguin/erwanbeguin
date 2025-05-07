import styles from "./page.module.css";

import { Article } from '@/types/article';
import articles from '@/../public/articles.json';
import ArticleComponent from "@/components/articleComponent/articleComponent";
import IconButton from "@/components/basicComponents/iconButton/IconButton";
import { FaArrowLeft } from 'react-icons/fa';

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {

    const { slug } = await params
    const article: Article | undefined = articles.find((article) => article.slug === slug);

    return (
        <div className={styles.page}>
            <main className={styles.main}>

            <div className="contentHeader">
                <IconButton
                    icon={<FaArrowLeft color="var(--foreground)" />} 
                    tooltipText="Go back to blog"
                    backgroundColor="var(--primary-color)" 
                    width="40px" 
                    height="40px" 
                    nav="/blog"
                />
                <ArticleComponent
                    data={article}
                />
            </div>

            </main>
        </div>
    );
}
