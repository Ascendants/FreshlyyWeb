import React from 'react';
import theme from '../styles/theme';
import Image from 'next/image';
import ascendants from '../images/ascendantst.svg';
import logo from '../images/logo.svg';
import { P } from './Texts';
import { A } from './Buttons';
export default function () {
  return (
    <>
      <section style={styles.footer}>
        <div style={styles.sides}></div>
        <div style={styles.middle}>
          <Image src={logo} alt='Freshlyy Logo' style={styles.logo} />
          <div style={styles.description}>
            <P style={{ marginTop: 0, marginBottom: 5 }}>
              &copy; 2023 Freshlyy
            </P>
            <P style={{ marginTop: 0, marginBottom: 5 }}>
              <A>Privacy Policy</A> | <A>Terms & Conditions</A>
            </P>
          </div>
        </div>
        <div style={styles.sides}>
          <Image src={ascendants} alt='Ascendants Logo' />
        </div>
      </section>
    </>
  );
}
const styles = {
  footer: {
    backgroundColor: theme.primaryShadeLighter,
    display: 'flex',
    paddingTop: 50,
    paddingBottom: 50,
  },
  sides: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  middle: {
    flex: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
  },
  logo: {
    height: 50,
    width: 'auto',
  },
  description: {
    textAlign: 'center',
  },
};
