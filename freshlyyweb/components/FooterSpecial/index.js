import React from 'react';
import theme from '../../styles/theme';
import Image from 'next/image';
import ascendants from '../../images/ascendantst.svg';
import logo from '../../images/logo.svg';
import { P } from '../Texts';
import { A } from '../Buttons';
import styles from './styles.module.scss';

export default function () {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.sides}></div>
        <div className={styles.middle}>
          <Image src={logo} alt='Freshlyy Logo' className={styles.logo} />
          <div className={styles.description}>
            <P style={{ marginTop: 0, marginBottom: 5 }}>
              &copy; 2023 Freshlyy
            </P>
            <P style={{ marginTop: 0, marginBottom: 5 }}>
              <A>Privacy Policy</A> | <A>Terms & Conditions</A>
            </P>
          </div>
        </div>
        <div className={styles.sides}>
          <Image src={ascendants} alt='Ascendants Logo' />
        </div>
      </section>
    </>
  );
}
