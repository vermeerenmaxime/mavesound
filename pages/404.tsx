import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="c-app">
      <Head>
        <title>Mave :: 404</title>
        <meta
          name="description"
          content="Mave is a music producer from Belgium.."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="c-main"></main>

      <Footer></Footer>
    </div>
  );
}
