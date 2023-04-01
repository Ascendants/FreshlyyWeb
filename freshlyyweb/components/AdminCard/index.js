import React from 'react';
import theme from '../../styles/theme';
import { H5, P, H4 } from '../Texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';

export default function (props) {
  return (
    <>
      <div className={styles.adcard}>
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
        <H5 className={styles.num}>{props.number}</H5>
        <P className={styles.admintext}>{props.admintitle}</P>
      </div>
    </>
  );
}
