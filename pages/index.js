import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import MainView from "../components//main-view/main-view";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countdown Timer App</title>
        <meta name="description" content="Countdown Timer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainView />
      </main>

      <footer className={styles.footer}>
        Sherlezy tribute to Vallazza . Coded by&nbsp;
        <Link href="https://untea-rocmu-it.herokuapp.com/" target="_blank">
          Catalin Marius Untea
        </Link>
        .
      </footer>
    </div>
  );
}
