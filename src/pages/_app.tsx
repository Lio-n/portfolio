import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leonardo Fontan</title>
        <meta name="description" content="Leonardo Fontan's Portfolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ display: "grid", gap: "10rem" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
