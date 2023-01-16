// import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

// Document.getInitialProps = async(ctx: DocumentContext):Promise<DocumentInitialProps> =>{
//   // const initialProps = await Document.getInitialProps(ctx)
//   // return { ...initialProps}
//    const res = await fetch("https://api.github.com/repos/vercel/next.js");
//    const json = await res.json();
//    return { stars: json.stargazers_count };
// }

// export default function Document({ stars }): JSX.Element {
//   return (
//     <Html lang="ru">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import React from "react";
import Document, {
  DocumentInitialProps,
  Html,
  DocumentContext,
  Head,
  NextScript,
  Main,
} from "next/document";

class MyDocument extends React.Component {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;