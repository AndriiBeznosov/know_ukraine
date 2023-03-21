import { useState } from 'react';
import { Register } from './FormRegister';
import { Login } from './FormLogin';

export const FormWrapper = () => {
  const [checkForm, setCheckForm] = useState(null);

  const statusForm = () => {
    setCheckForm(!checkForm);
  };

  return checkForm ? (
    <Login checkForm={statusForm} anime={checkForm} />
  ) : (
    <Register checkForm={statusForm} anime={checkForm} />
  );
};
