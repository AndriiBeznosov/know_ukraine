import { Slider } from 'components/Home/HomeTestingHistory/Slider/Slider';
import { HomeTestingHistory } from '../components/Home/HomeTestingHistory/HomeTestingHistory';

export const TestingHistory = ({ status }) => {
  return (
    <HomeTestingHistory status={status}>
      <Slider />
    </HomeTestingHistory>
  );
};
