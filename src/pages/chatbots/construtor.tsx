import React from "react";
import Head from "next/head";
import Construtor from "@/components/Construtor";

const BuilderPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Builder | ZNLU Lite</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Construtor />
    </>
  );
};

export default BuilderPage;