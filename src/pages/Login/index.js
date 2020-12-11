import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import {
  isAuth,
  initialState,
  isFilled,
  handler as addState,
  VARS,
} from '../../helpers';
import styles from './styles.module.css';

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const [toggle, setToggle] = useState(true);
  const [isError, setError] = useState(false);
  const inputHandler = addState(state, setState);

  const onSubmit = () => {
    console.log('submit', state);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Howzit?!</h1>
      <div className={styles.subTitle}>
        To get started, please fill out the form below to validate your account.
      </div>
      <div className={styles.form}>
        <Input name={VARS.email} value={state.email} handler={inputHandler} />
        <Input
          type={toggle ? 'password' : 'text'}
          name={VARS.password}
          value={state.password}
          handler={inputHandler}
          toggler={(event) => setToggle(!toggle)}
        />

        {isError && 'Invalid Credentials'}
        <input
          className={styles.submit}
          type="submit"
          disabled={isFilled(state)}
          onClick={onSubmit}
          value="NEXT"
        />
        <div style={{ textAlign: 'center' }}>
          By clicking "next" you agree to be awesome
        </div>
      </div>
    </div>
  );
};

export default Login;
