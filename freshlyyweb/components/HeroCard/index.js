import React from 'react';
import Image from 'next/image';
import Theme from '../../styles/theme';
import { H7, H8 } from '../Texts';
import styles from './styles.module.scss';
export default function (props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <Image src={props.icon} alt={props.alt} />
      </div>
      <div className={styles.descContainer}>
        <H7 style={{ marginTop: 0, marginBottom: 0 }}>{props.title}</H7>
        <H8 style={{ marginTop: 0, marginBottom: 0 }}>{props.desc}</H8>
      </div>
    </div>
  );
}
