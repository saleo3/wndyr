export const isEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const isAuth = ({ email, password }) => {
  return email === 'emir@wndyr.com' && password === 'wndyr';
};

export const VARS = {
  email: 'email',
  password: 'password',
};

export const initialState = {
  [VARS.email]: '',
  [VARS.password]: '',
};

export function isFilled(state) {
  return (
    !Object.values(state).every((prop) => prop !== '') || !isEmail(state.email)
  );
}

export function handler(state, setState) {
  return function (field, event) {
    return setState({ ...state, [field]: event.target.value });
  };
}
