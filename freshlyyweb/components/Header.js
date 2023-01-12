import Image from 'next/image';
import React from 'react';
import Theme from '../styles/theme';
import { Link } from 'react-scroll';
import logo from '../images/logo.svg';
import { Button } from './Buttons';

export default function () {
  const [activeLink, setActiveLink] = React.useState('home');
  function active(what) {
    setActiveLink(what);
  }
  return (
    <>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.logoArea}>
            <Image
              src={logo}
              alt='Freshlyy Logo'
              style={styles.logo}
              priority
            />
          </div>
          <div style={styles.menuArea}>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-150}
              onSetActive={active}
            >
              <Button
                title='Home'
                size='normal'
                color={
                  activeLink == 'home' ? 'shadedPrimary' : 'shadedTertiary'
                }
              />
            </Link>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-150}
              onSetActive={active}
            >
              <Button
                title='About'
                size='normal'
                color={
                  activeLink == 'about' ? 'shadedPrimary' : 'shadedTertiary'
                }
              />
            </Link>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-150}
              onSetActive={active}
            >
              <Button
                title='Contact'
                size='normal'
                color={
                  activeLink == 'contact' ? 'shadedPrimary' : 'shadedTertiary'
                }
              />
            </Link>
            <Button
              title='Administration'
              size='normal'
              color='filledPrimary'
            />
          </div>
        </div>
      </section>
    </>
  );
}
const styles = {
  section: {
    height: '15vh',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 10000,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(100px)',
    marginBottom: 20,
  },
  container: {
    width: '70vw',
    height: '15vh',
    margin: 'auto',
    display: 'flex',
  },
  logoArea: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  menuArea: {
    flex: 3,
    display: 'flex',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  logo: {
    height: 50,
    width: 'auto',
  },
};
