import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <html lang="ko" />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="광주소프트웨어마이스터고등학교 대나무숲, 하고 싶던 말을 전해보세요."
          />
          <link rel="icon" href="/img/favicon.ico" />
          <script
            data-ad-client="ca-pub-3633785808737413"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
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
