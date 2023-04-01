import React from 'react';
import ascendants from '../../images/ascendantsg.svg';
import { H5, H3 } from '../Texts';
import Image from 'next/image';
import styles from './styles.module.scss';
export default function () {
  return (
    <>
      <section className={styles.contactArea}>
        <div className={styles.sectionArea}>
          <H5 className={{ fontWeight: 400 }}>
            Feel free to drop us an email at
          </H5>
          <H3>hello@freshlyy.lk</H3>
        </div>
        <div className={{ ...styles.sectionArea, ...styles.imageArea }}>
          <Image
            src={ascendants}
            alt='Ascendants Logo'
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
