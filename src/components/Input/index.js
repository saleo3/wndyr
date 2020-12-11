import React from 'react';
import styles from './styles.module.css';
import icon from './Vector.svg';

const Input = ({ name, type = 'text', value, handler, toggler }) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        value={value}
        onChange={(event) => handler(name, event)}
        required
      />
      <label htmlFor="">{name}</label>
      {toggler && (
        <button onClick={toggler}>
          <img src={icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Input;
