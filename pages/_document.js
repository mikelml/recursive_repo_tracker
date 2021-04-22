import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <nav class="navbar navbar-expand-lg navbar-light custom-navbar-border-bottom">
            <div className="navbar-custom-container">
              <a class="navbar-brand" href="/">Commits</a>
              <a class="navbar-brand" href="/user">User</a>
            </div>
          </nav>
          <Main />
          <NextScript />
        </body>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
                AOS.init();
            `
        }} />
      </Html>
    )
  }
}

export default MyDocument