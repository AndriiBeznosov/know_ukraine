import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';

export const Layout = ({ status, setAction }) => {
  return (
    <Wrapper status={status}>
      <AppBar status={status} setAction={setAction} />
      <Outlet />
    </Wrapper>
  );
};
