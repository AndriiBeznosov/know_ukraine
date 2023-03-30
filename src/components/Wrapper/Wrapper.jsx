import { Wrapper } from './Wrapper.styled';
import { memo } from 'react';

export const Main = memo(
  ({ status, children }) => {
    return <Wrapper status={status}>{children}</Wrapper>;
  },
  (prevProps, nextProps) => {
    return prevProps.status === nextProps.status;
  }
);
