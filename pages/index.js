import Head from "next/head";
import Table from "../components/Table";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aerialops Challenge</title>
        <meta name="description" content="fun challenge by Aerialops" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Table />
    </div>
  );
}
