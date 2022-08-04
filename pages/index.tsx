import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const playSodaSound = () => {
    const sodaSound = new Audio("./soda-rage.mp3");
    sodaSound.play();
    console.log("playing soda sound");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Raging Soda</title>
        <meta name="description" content="raging soda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/heart2.png" alt="Vercel Logo" height={72} width={72} />
        <h1 className={styles.title}>Raging Soda</h1>
        <p className={styles.description}>
          {"Because regaular soda just isn't as exciting"}
        </p>
        <div className={styles.sodaImage}>
          <Image
            onClick={playSodaSound}
            src="/soda-faucet.jpeg"
            width={200}
            height={200}
            alt="soda"
          />
        </div>
        <div className={styles.grid}>
          <a
            href="https://en.wikipedia.org/wiki/Carbonated_water"
            className={styles.card}
          >
            <h2>Documentation </h2>
            <p>Learn about the rich history of Soda water</p>
          </a>

          {/* <Image
            className={styles.sodaImage}
            onClick={playSodaSound}
            src="/soda.png"
            width={100}
            height={100}
            alt="soda"
          /> */}
        </div>
        {/* <Image
          style={{ zIndex: -2, opacity: 0.12, pointerEvents: "none" }}
          className={styles.sodaImage}
          onClick={playSodaSound}
          src="/soda-faucet.jpeg"
          layout="fill"
          objectFit="fill"
          alt="soda"
        /> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://en.wikipedia.org/wiki/Carbonated_water"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by cuteness
        </a>
      </footer>
    </div>
  );
};

export default Home;
