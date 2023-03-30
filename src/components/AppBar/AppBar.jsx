import { useCallback } from 'react';
import { BsGrid, BsChevronCompactLeft } from 'react-icons/bs';
import { Button, Nav, NavItem, Title, Wrapper } from './AppBar.styled';

const ref = [
  {
    to: '/',
    text: 'Галерея фото',
    active: false,
  },
  {
    to: 'testing-history',
    text: 'Тестування історія',
    active: false,
  },
  {
    to: 'html-css',
    text: 'Html та CSS',
    active: false,
  },
  {
    to: 'javascript',
    text: 'Javascript',
    active: false,
  },
  {
    to: 'react',
    text: 'React',
    active: false,
  },
];

export const AppBar = ({ status, setAction }) => {
  const hendlerClick = useCallback(() => {
    setAction(!status);
  }, [setAction, status]);

  return (
    <Wrapper status={status}>
      <Title status={status}>Історійка</Title>
      <Nav status={status}>
        {ref.map(item => (
          <NavItem to={item.to} key={item.text}>
            {item.text}
          </NavItem>
        ))}
      </Nav>

      <Button type="button" status={status} onClick={hendlerClick}>
        {!status ? <BsGrid /> : <BsChevronCompactLeft />}
      </Button>
    </Wrapper>
  );
};
