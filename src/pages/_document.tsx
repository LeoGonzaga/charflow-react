import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
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
