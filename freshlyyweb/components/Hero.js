import React from 'react';
import Image from 'next/image';
import { H1, P, H5 } from './Texts';
import appstore from '../images/appstore.svg';
import hero from '../images/hero.png';
import HeroCard from './HeroCard';
import aim from '../images/aim.svg';
import support from '../images/support.svg';
import social from '../images/social.svg';
import card from '../images/card.svg';

export default function () {
  return (
    <>
      <section style={styles.section}>
        <div style={{ ...styles.subSection, marginTop: 15 }}>
          <H1 style={{ fontWeight: 500 }}>
            Freshly picked.
            <br />
            Just for you.
          </H1>
          <P>
            A platform to get your fresh produce delivered directly from farmers
            to your doorstep, from your neighboring farmers without
            intermediaries.
          </P>
          <H5>Coming soon on</H5>
          <Image src={appstore} alt='Appstore Icons' priority />
        </div>
        <div style={{ ...styles.subSection, ...styles.heroSection }}>
          <Image
            src={hero}
            style={styles.hero}
            alt='Old man happy with fresh vegetables'
            priority
          />
        </div>
      </section>
      <section style={styles.cardArea}>
        <HeroCard
          icon={aim}
          title='No Intermediaries'
          desc='Directly from farmer'
          alt='Aim'
        />
        <HeroCard
          icon={card}
          title='Easy Payment'
          desc='100% Secure'
          alt='Card'
        />
        <HeroCard
          icon={support}
          title='Live Support'
          desc='For both customers & farmers'
          alt='Support'
        />
        <HeroCard
          icon={social}
          title='Get Social'
          desc='Connect with farmers
on the social corner'
          alt='Social'
        />
      </section>
    </>
  );
}
const styles = {
  section: {
    display: 'flex',
  },
  subSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    width: 450,
    height: 'auto',
  },
  cardSection: {
    marginBottom: 1000,
  },
  cardArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
};
