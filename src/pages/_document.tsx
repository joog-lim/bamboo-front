import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <html lang="ko" />
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="대나무 숲은 평소에 하지 못하는 이야기들을 나눌 수 있도록 하는 웹/앱 서비스 입니다. 모두에게 하고 싶던 말, 무엇인가요?"
          />
          <meta
            name="keywords"
            content="광주소프트웨어마이스터고등학교, GSM, 대나무숲, 광대숲, 죽림, Joog-lim, 광주소프트웨어마이스터고등학교 대나무숲"
          />
          <meta name="author" content="jooglim.org@gmail.com" />
          {/* 오픈그래프 */}
          <meta property="og:url" content="https://joog-lim.info" />
          <meta
            property="og:title"
            content="광주소프트웨어마이스터고등학교 대나무숲"
            key="title"
          />
          <meta
            property="og:description"
            content="대나무 숲은 평소에 하지 못하는 이야기들을 나눌 수 있도록 하는 웹/앱 서비스 입니다. 모두에게 하고 싶던 말, 무엇인가요?"
          />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/89506645?s=96&v=4"
          />
          <meta property="og:locale" content="ko_KR" />
          <meta
            property="og:site_name"
            content="광주소프트웨어마이스터고등학교 대나무숲"
          />
          {/* 트위터카드 */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@joog-lim" />
          <meta name="twitter:creator" content="@https://joog-lim.info" />
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
