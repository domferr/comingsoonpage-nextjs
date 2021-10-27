import Head from 'next/head'
import "../styles/style.scss"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coming Soon!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App
