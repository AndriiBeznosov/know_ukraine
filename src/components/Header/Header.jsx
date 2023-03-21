import { List, Title, Wrapper } from './Header.styled';

export const Header = () => {
  return (
    <Wrapper>
      <Title>Історійка</Title>
      <List>
        <li>Головна сторінка</li>
        <li>Новини</li>
        <li>Тестування</li>
        <li>Мій кабінет</li>
      </List>
    </Wrapper>
  );
};
