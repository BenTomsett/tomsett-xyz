import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="@benjitomsett" key="twhandle" />
          <meta property="og:url" content="https://tomsett.xyz" key="ogurl" />
          <meta property="og:image" content="https://tomsett.xyz/img/og.png" key="ogimage" />
          <meta property="og:site_name" content="Ben Tomsett" key="ogsitename" />
          <meta property="og:title" content="Home" key="ogtitle" />
          <meta property="og:type" content="profile" key="ogprofile" />
          <meta property="og:description" content="Computing student, full stack developer and technical support analyst" key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
