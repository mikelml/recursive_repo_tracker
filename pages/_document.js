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
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <nav class="navbar navbar-expand-lg navbar-light custom-navbar-border-bottom">
            <div class="collapse navbar-collapse navbar-custom-container" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class={"navbar-brand nav-link"} aria-current="page" href="/">Commits</a>
                </li>
                <li class="nav-item">
                  <a class={"navbar-brand nav-link"} href="/user">User</a>
                </li>
                <li class="nav-item">
                  <a class={"navbar-brand nav-link"} href="/repos">Repositories</a>
                </li>
              </ul>
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