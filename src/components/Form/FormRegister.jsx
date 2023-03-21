import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Wrapper, FormContainer, Input, Label, Button, ButtomGoogle, Div } from './Form.styled';
import icon from '../../image/icon-sprite.svg';
import { useState } from 'react';
import { BsHouseUp } from 'react-icons/bs';

const schema = object().shape({
  login: string()
    .min(3, 'Мінімальна довжина 3')
    .max(30, 'Максимальна довжина 30')
    .required("Обов'язково"),
  email: string().email('Невірний формат пошти').required("Обов'язково"),
  password: string()
    .min(6, 'Мінімальна довжина 6')
    .max(30, 'Максимальна довжина 30')
    .required("Обов'язково"),
});

const initialValue = {
  login: '',
  email: '',
  password: '',
};

export const Register = ({ checkForm, anime }) => {
  const [showHidePass, setShowHidePass] = useState(false);

  const hendleSubmit = (value, actions) => {
    console.log(value);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Wrapper status={anime}>
      <Formik initialValues={initialValue} onSubmit={hendleSubmit} validationSchema={schema}>
        <FormContainer autoComplete="on">
          <ButtomGoogle>
            <svg>
              <use href={`${icon}#icon-google-icon`} />
            </svg>
            Google
          </ButtomGoogle>
          <Label>
            Ім'я
            <Input type="username" name="login" placeholder="ім'я" />
            <ErrorMessage component="span" name="login" />
          </Label>
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
          <Button type="submit">Регістрація</Button>
          <Div>
            <button type="button" onClick={checkForm}>
              <BsHouseUp />
              Вхід
            </button>
            <button type="button">Забув пароль !</button>
          </Div>
        </FormContainer>
      </Formik>
    </Wrapper>
  );
};
