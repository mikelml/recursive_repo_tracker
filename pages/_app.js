import Head from 'next/head'
import '../styles/globals.css'
import '../styles/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from './app/store'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
