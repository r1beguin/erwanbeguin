import styles from "./page.module.css";
import HomeCardList from "@/components/HomeCardList/HomeCardList";
import RessourcesComponent from "@/components/ressourcesComponent/ressourcesComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <div className={styles.contentContainer}>  
          <HomeCardList title="Projets" link="/projects" type="projects" />
          <HomeCardList title="Blog" link="/blog" />
        </div>

        <div className={styles.ressourcesContainer}>
          <RessourcesComponent />
        </div>

      </main>
    </div>
  );
}
