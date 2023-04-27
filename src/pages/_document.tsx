import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://kit.fontawesome.com/2a7fc67a92.js"></Script>
      </body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://zenvia-uikit.s3.amazonaws.com/css/sirius.min.css"
        rel="stylesheet"
      />
    </Html>
  );
}
