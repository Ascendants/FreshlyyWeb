import React from 'react';
import ascendants from '../images/ascendantsg.svg';
import { H5, H3 } from './Texts';
import Image from 'next/image';
export default function () {
  return (
    <>
      <section style={styles.contactArea}>
        <div style={styles.sectionArea}>
          <H5 style={{ fontWeight: 400 }}>Feel free to drop us an email at</H5>
          <H3>hello@freshlyy.lk</H3>
        </div>
        <div style={{ ...styles.sectionArea, ...styles.imageArea }}>
          <Image src={ascendants} alt='Ascendants Logo' style={styles.image} />
        </div>
      </section>
    </>
  );
}
const styles = {
  contactArea: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 100,
  },
  sectionArea: {
    flex: 1,
  },
  imageArea: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: 'auto',
  },
};
