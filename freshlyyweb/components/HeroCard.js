import React from 'react';
import Image from 'next/image';
import Theme from '../styles/theme';
import { H7, H8 } from './Texts';
export default function (props) {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.iconContainer}>
        <Image src={props.icon} alt={props.alt} />
      </div>
      <div style={styles.descContainer}>
        <H7 style={{ marginTop: 0, marginBottom: 0 }}>{props.title}</H7>
        <H8 style={{ marginTop: 0, marginBottom: 0 }}>{props.desc}</H8>
      </div>
    </div>
  );
}
const styles = {
  cardContainer: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    width: 300,
    marginRight: 10,
    marginLeft: 10,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: Theme.primaryShadeLighter,
    borderRadius: 10,
  },
};
