import React from 'react';
import Theme from '../../styles/theme';
import styles from './styles.module.scss';

module.exports.P = function (props) {
  return <p className={`${styles.p} ${props.className}`}>{props.children}</p>;
};

module.exports.H1 = function (props) {
  return <p className={`${styles.h1} ${props.className}`}>{props.children}</p>;
};
module.exports.H2 = function (props) {
  return <p className={`${styles.h2} ${props.className}`}>{props.children}</p>;
};

module.exports.H3 = function (props) {
  return <p className={`${styles.h3} ${props.className}`}>{props.children}</p>;
};

module.exports.H4 = function (props) {
  return <p className={`${styles.p} ${props.className}`}>{props.children}</p>;
};

module.exports.H5 = function (props) {
  return <p className={`${styles.h5} ${props.className}`}>{props.children}</p>;
};

module.exports.H6 = function (props) {
  return <p className={`${styles.h6} ${props.className}`}>{props.children}</p>;
};

module.exports.H7 = function (props) {
  return (
    <p
      style={{
        ...props.style,
      }}
      className={`${styles.h7} ${props.className}`}
    >
      {props.children}
    </p>
  );
};

module.exports.H8 = function (props) {
  return <p className={`${styles.h8} ${props.className}`}>{props.children}</p>;
};

module.exports.Pr = function (props) {
  return (
    <span>
      <span
        style={{
          fontSize: Math.floor((props.fontSize ? props.fontSize : 16) * 0.6),
        }}
        className={`${styles.prs} ${props.className}`}
      >
        LKR
      </span>
      <span
        style={{
          fontSize: props.fontSize ? props.fontSize : 16,
        }}
        className={`${styles.pr} ${props.className}`}
      >
        &nbsp;{props.children}
      </span>
    </span>
  );
};
