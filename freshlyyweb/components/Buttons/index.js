import React from 'react';
import Theme from '../../styles/theme';
import styles from './styles.module.scss';

module.exports.Button = function (props) {
  let buttonBackground = '';
  switch (props.color) {
    case 'shadedPrimary':
      buttonBackground += `${styles.shadedPrimary} `;
      break;
    case 'filledPrimary':
      buttonBackground += `${styles.filledPrimary} `;
      break;
    case 'shadedSecondary':
      buttonBackground += `${styles.shadedSecondary} `;
      break;
    case 'filledSecondary':
      buttonBackground += `${styles.filledSecondary} `;
      break;
    case 'shadedTertiary':
      buttonBackground += `${styles.shadedTertiary} `;
      break;
    case 'filledTertiary':
      buttonBackground += `${styles.filledTertiary} `;
      break;
    case 'shadedWarning':
      buttonBackground += `${styles.shadedWarning} `;
      break;
    case 'filledWarning':
      buttonBackground += `${styles.filledWarning} `;
      break;
    case 'shadedDanger':
      buttonBackground += `${styles.shadedDanger} `;
      break;
    case 'filledDanger':
      buttonBackground += `${styles.filledDanger} `;
      break;
  }
  switch (props.size) {
    case 'small':
      buttonBackground += `${styles.smallButton} `;
      break;
    case 'normal':
      buttonBackground += `${styles.normalButton} `;
      break;
    case 'big':
      buttonBackground += `${styles.bigButton} `;
  }
  buttonBackground += `${styles.button} ${props.className}}`;
  let button = (
    <button onClick={props.onClick} className={buttonBackground}>
      {props.title}
    </button>
  );
  // if (props.type == 'icon') {
  //   button = (
  //     <button
  //       style={{...buttonBackground, ...styles.buttonIcon}}
  //       onPress={props.onPress}
  //     >
  //       {props.icon}
  //       {props.title}
  //     </button>
  //   );
  // }
  return button;
};

module.exports.A = function (props) {
  return (
    <a
      className={`${styles.a} ${props.className}`}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
};
