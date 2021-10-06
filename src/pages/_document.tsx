import Document, { Html, Head, Main, NextScript } from "next/document";
import NextHead from "next/head";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <NextHead>
          <html lang="ko" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script
            data-ad-client="ca-pub-3633785808737413"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </NextHead>
        <Head />
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
