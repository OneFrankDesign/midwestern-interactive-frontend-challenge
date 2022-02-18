import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header.component";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Midwestern Interactive Frontend Challenge</title>
        <meta
          name="description"
          content="Midwestern Interactive Frontend Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
