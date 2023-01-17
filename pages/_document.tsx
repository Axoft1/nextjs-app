import React from "react";
import Document, {
  DocumentInitialProps,
  Html,
  DocumentContext,
  Head,
  NextScript,
  Main
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