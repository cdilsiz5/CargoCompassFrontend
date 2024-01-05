import React from 'react';
import styles from './Input.css';


const Input = (props) => {
  const { label, error, onChange, name, type } = props;
  const inputClass = error ? `${styles.inputField} ${styles.inputFieldInvalid}` : styles.inputField;
  
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <input
        type={type}
        className={inputClass}
        onChange={onChange}
        name={name}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
