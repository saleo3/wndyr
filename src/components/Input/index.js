import React from 'react';
import styles from './styles.module.css';
import showPasswordIcon from './show.svg';
import hidePasswordIcon from './hide.svg';

const Input = ({
  name,
  type = 'text',
  value,
  handler,
  toggler,
  showPassword,
}) => {
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
          <img
            src={showPassword ? showPasswordIcon : hidePasswordIcon}
            alt=""
          />
        </button>
      )}
    </div>
  );
};

export default Input;
