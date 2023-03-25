import { BsGrid, BsChevronCompactLeft } from 'react-icons/bs';
import { Button, Nav, NavItem, Title, Wrapper } from './AppBar.styled';

export const AppBar = ({ status, setAction }) => {
  return (
    <Wrapper status={status}>
      <Title status={status}>Історійка</Title>
      <Nav status={status}>
        <NavItem to="/">Головна сторінка</NavItem>
        <NavItem to="testing-history">Тестування історія</NavItem>
        <NavItem to="html-css">Html та CSS</NavItem>
        <NavItem to="javascript">Javascript</NavItem>
        <NavItem to="react">React</NavItem>
      </Nav>

      <Button type="button" status={status} onClick={() => setAction(!status)}>
        {!status ? <BsGrid /> : <BsChevronCompactLeft />}
      </Button>
    </Wrapper>
  );
};
