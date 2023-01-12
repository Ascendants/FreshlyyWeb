import Head from 'next/head';
import { H6 } from '../components/Texts';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='theme-color' content='#10ab68' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta property='og:title' content='Freshlyy' />
        <meta
          property='og:description'
          content='Freshlyy | Fresh Produce. Just For You.'
        />
        {/* <meta property='og:image' content='https://hasathcharu.com/embed.png' />
        <meta property='og:url' content='https://hasathcharu.com' /> */}
        <meta property='og:type' content='website' />
        <meta
          name='description'
          content='Freshlyy | Fresh Produce. Just For You.'
        />
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
};
