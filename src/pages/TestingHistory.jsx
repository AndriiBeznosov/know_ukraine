import { HomeTestingHistory } from '../components/Home/HomeTestingHistory/HomeTestingHistory';
import { Slider } from '../components/Slider/Slider';

export const TestingHistory = ({ status }) => {
  return (
    <HomeTestingHistory status={status}>
      <Slider />
    </HomeTestingHistory>
  );
};
