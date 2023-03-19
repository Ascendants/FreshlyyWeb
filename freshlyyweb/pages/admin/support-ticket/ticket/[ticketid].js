import Head from 'next/head';
import Image from 'next/image';
import { P, H1, H2, H3, H4, H5, H6, H7, H8, H9, Pr } from '../../../../components/Texts';
import { motion } from 'framer-motion';

import Footer from '../../../../components/FooterSpecial';
import Header from '../../../../components/Header';
import theme from '../../../../styles/theme';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const inView = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
  };
  return (
    <>
      <div style={styles.backgroundGreen}></div>
      <Header />
      <main style={styles.main}>
        <H1>Hi from {router.query.ticketid}</H1>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  backgroundGreen: {
    backgroundColor: theme.primaryShadeLighter,
    height: '80vh',
    width: '100%',
    position: 'absolute',
    zIndex: -1999,
  },
  main: {
    width: '70vw',
    margin: 'auto',
  },
  sectionTitle: {
    textAlign: 'center',
    margin: 100,
  },
};
