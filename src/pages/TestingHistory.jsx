import { HomeTestingHistory } from '../components/Home/HomeTestingHistory/HomeTestingHistory';
import { Main } from '../components/Wrapper/Wrapper';

export const TestingHistory = ({ status }) => {
  return (
    <Main status={status}>
      <HomeTestingHistory />
    </Main>
  );
};
