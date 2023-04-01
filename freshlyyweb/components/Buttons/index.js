import React from 'react';
import Theme from '../../styles/theme';

module.exports.Button = function (props) {
  const [hover, setHover] = React.useState(false);
  let buttonBackground = {};
  switch (props.color) {
    case 'shadedPrimary':
      buttonBackground = { ...buttonBackground, ...styles.shadedPrimary };
      break;
    case 'filledPrimary':
      buttonBackground = { ...buttonBackground, ...styles.filledPrimary };
      break;
    case 'shadedSecondary':
      buttonBackground = { ...buttonBackground, ...styles.shadedSecondary };
      break;
    case 'filledSecondary':
      buttonBackground = { ...buttonBackground, ...styles.filledSecondary };
      break;
    case 'shadedTertiary':
      buttonBackground = { ...buttonBackground, ...styles.shadedTertiary };
      break;
    case 'filledTertiary':
      buttonBackground = { ...buttonBackground, ...styles.filledTertiary };
      break;
    case 'shadedWarning':
      buttonBackground = { ...buttonBackground, ...styles.shadedWarning };
      break;
    case 'filledWarning':
      buttonBackground = { ...buttonBackground, ...styles.filledWarning };
      break;
    case 'shadedDanger':
      buttonBackground = { ...buttonBackground, ...styles.shadedDanger };
      break;
    case 'filledDanger':
      buttonBackground = { ...buttonBackground, ...styles.filledDanger };
      break;
  }
  switch (props.size) {
    case 'small':
      buttonBackground = { ...buttonBackground, ...styles.smallButton };
      break;
    case 'normal':
      buttonBackground = { ...buttonBackground, ...styles.normalButton };
      break;
    case 'big':
      buttonBackground = { ...buttonBackground, ...styles.bigButton };
  }
  let button = (
    <button
      style={{
        ...buttonBackground,
        filter: hover ? 'brightness(85%)' : 'none',
      }}
      onClick={props.onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
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
  buttonBackground = { ...buttonBackground, ...props.style };
  return button;
};

module.exports.A = function (props) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      style={{
        all: 'unset',
        textDecoration: 'underline',
        color: hover ? Theme.primary : Theme.textColor,
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
};

const styles = {
  bigButton: {
    fontFamily: 'Poppins',
    fontSize: 20,
    textAlign: 'center',
    padding: 14,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 18,
    borderRadius: 18,
  },
  normalButton: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins',
    padding: 6,
    paddingRight: 14,
    paddingLeft: 14,
    margin: 5,
    borderRadius: 12,
  },
  smallButton: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 500,
    textAlign: 'center',
    padding: 6,
    margin: 6,
    borderRadius: 10,
  },
  shadedPrimary: {
    backgroundColor: Theme.primaryShade,
    color: Theme.primary,
  },
  filledPrimary: {
    backgroundColor: Theme.primary,
    color: Theme.contrastTextColor,
  },
  shadedSecondary: {
    backgroundColor: Theme.secondaryShade,
    color: Theme.secondary,
  },
  filledSecondary: {
    backgroundColor: Theme.secondary,
    color: Theme.contrastTextColor,
  },
  shadedTertiary: {
    backgroundColor: Theme.tertiaryShade,
    color: Theme.textColor,
  },
  filledTertiary: {
    backgroundColor: Theme.tertiary,
    color: Theme.contrastTextColor,
  },
  shadedWarning: {
    backgroundColor: Theme.warningShade,
    color: Theme.textColor,
  },
  filledWarning: {
    backgroundColor: Theme.warning,
    color: Theme.textColor,
  },
  shadedDanger: {
    backgroundColor: Theme.dangerShade,
    color: Theme.danger,
  },
  filledDanger: {
    backgroundColor: Theme.danger,
    color: Theme.contrastTextColor,
  },
  buttonIconBackground: {
    borderRadius: 16,
    minHeight: 48,
    minWidth: 48,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 8,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
};
