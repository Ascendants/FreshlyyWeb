import Head from 'next/head';
import Image from 'next/image';
import { P, H1, H2, H3, H4, H5, H6, H7, H8, Pr } from '../components/Texts';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/FooterSpecial';
import Header from '../components/Header';
import theme from '../styles/theme';

export default function Home() {
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
        <motion.section
          id='home'
          variants={inView}
          initial='hidden'
          whileInView='enter'
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>
        <motion.section
          id='about'
          variants={inView}
          initial='hidden'
          whileInView='enter'
          viewport={{ once: true }}
        >
          <H2 style={styles.sectionTitle}>About Us</H2>
          <AboutUs />
        </motion.section>
        <motion.section
          id='contact'
          variants={inView}
          initial='hidden'
          whileInView='enter'
          viewport={{ once: true }}
        >
          <H2 style={styles.sectionTitle}>Contact Us</H2>
          <ContactUs />
        </motion.section>
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
