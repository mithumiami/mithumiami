import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
