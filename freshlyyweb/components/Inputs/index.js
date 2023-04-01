import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

module.exports.TextInput = (props) => {
  return (
    <div className={styles.inputBox}>
      <span>{props.domName}</span>
      {props.type !== 'textarea' && (
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          className={styles.input}
        />
      )}
      {props.type === 'textarea' && (
        <textarea
          rows='5'
          cols='45'
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          className={styles.textarea}
        />
      )}
      <span className={styles.errorMessage}>
        {props.error !== '' && <FontAwesomeIcon icon={faCircleArrowUp} />}{' '}
        {props.error}
      </span>
    </div>
  );
};
