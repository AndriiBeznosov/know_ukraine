import { Formik, ErrorMessage } from 'formik';
import { Wrapper, FormContainer, Input, Label, Button, ButtomGoogle, Div } from './Form.styled';
import icon from '../../image/icon-sprite.svg';
import { useState } from 'react';
import { BsHouseAdd } from 'react-icons/bs';

const initialValue = {
  login: '',
  email: '',
  password: '',
};

export const Login = ({ checkForm, anime }) => {
  const [showHidePass, setShowHidePass] = useState(false);

  const hendleSubmit = (value, actions) => {
    console.log(value);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Wrapper status={anime}>
      <Formik initialValues={initialValue} onSubmit={hendleSubmit} autoСomplete="on">
        <FormContainer>
          <ButtomGoogle>
            <svg>
              <use href={`${icon}#icon-google-icon`} />
            </svg>
            Google
          </ButtomGoogle>
          <Label>
            Пошта
            <Input
              type="email"
              name="email"
              placeholder="email@email.com"
              autoComplete="username"
            />
            <ErrorMessage component="span" name="email" />
          </Label>
          <Label>
            Пароль
            <Input
              type={!showHidePass ? 'password' : 'text'}
              name="password"
              placeholder="пароль"
              autoComplete="current-password"
            />
            <ErrorMessage component="span" name="password" />
            <button type="button" onClick={() => setShowHidePass(!showHidePass)}>
              <svg>
                <use href={showHidePass ? `${icon}#icon-eye` : `${icon}#icon-eye-closed`} />
              </svg>
            </button>
          </Label>
          <Button type="submit">Вхід</Button>
          <Div>
            <button type="button" onClick={checkForm}>
              <BsHouseAdd />
              Регістрація
            </button>
            <button type="button">Забув пароль !</button>
          </Div>
        </FormContainer>
      </Formik>
    </Wrapper>
  );
};
