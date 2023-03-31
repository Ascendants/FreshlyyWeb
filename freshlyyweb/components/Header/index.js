import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import { Button } from '../Buttons';
import styles from './styles.module.scss';

export default function () {
  const [activeLink, setActiveLink] = React.useState('home');
  function active(what) {
    setActiveLink(what);
  }
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.logoArea}>
            <Image
              src={logo}
              alt='Freshlyy Logo'
              className={styles.logo}
              priority
            />
          </div>
          <div className={styles.menuArea}>
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
