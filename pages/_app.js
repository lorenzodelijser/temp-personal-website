import Head from 'next/head'
import Inspect from 'inspx'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Lorenzo de Lijser</title>

      <meta name="apple-mobile-web-app-title" content="Lorenzo" />
      <meta name="description" content="Website of Lorenzo de Lijser" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <link rel="shortcut icon" type="image/png" href="/images/favicon-180.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-180.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Inspect>
      <Component {...pageProps} />
    </Inspect>
  </>
}

export default MyApp
