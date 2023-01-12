import React from 'react';
import Theme from '../styles/theme';

module.exports.P = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        color: Theme.textColor,
        marginTop: 15,
        marginBottom: 15,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H1 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 55,
        marginTop: 20,
        marginBottom: 20,
        color: Theme.textColor,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};
module.exports.H2 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: 40,
        marginTop: 20,
        marginBottom: 20,
        color: Theme.textColor,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H3 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        fontWeight: 500,
        color: Theme.textColor,
        fontSize: 28,
        marginTop: 20,
        marginBottom: 20,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H4 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        fontWeight: 500,
        color: Theme.textColor,
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H5 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        fontWeight: 500,
        color: Theme.textColor,
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H6 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        fontWeight: 500,
        color: Theme.textColor,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H7 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        color: Theme.textColor,
        fontWeight: 500,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 14,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.H8 = function (props) {
  return (
    <p
      style={{
        fontFamily: 'Poppins',
        color: Theme.textColor,
        fontSize: 12,
        marginTop: 15,
        marginBottom: 15,
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
};

module.exports.Pr = function (props) {
  return (
    <span>
      <span
        style={{
          fontFamily: 'Poppins',
          color: Theme.textColor,
          fontSize: Math.floor((props.fontSize ? props.fontSize : 16) * 0.6),
          fontWeight: 'light',
          margin: 0,
          ...props.style,
        }}
      >
        LKR
      </span>
      <span
        style={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          color: Theme.textColor,
          margin: 0,
          padding: 0,
          fontSize: props.fontSize ? props.fontSize : 16,
          ...props.style,
        }}
      >
        &nbsp;{props.children}
      </span>
    </span>
  );
};
