import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Header from "../components/Header/Header.component";
import ContactContainer from "../components/ContactContainer/ContactContainer.component";

export default function Contact() {
  const routerUrl = useRouter().pathname;
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
      <Header routerUrl={routerUrl} />
      <ContactContainer />
    </div>
  );
}
