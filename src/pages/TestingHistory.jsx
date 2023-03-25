import { HomeTestingHistory } from '../components/Home/HomeTestingHistory/HomeTestingHistory';
import { Slider } from '../components/Home/HomeTestingHistory/Slider/Slider';

export const TestingHistory = ({ status }) => {
  return (
    <HomeTestingHistory status={status}>
      Testing
      <Slider />
    </HomeTestingHistory>
  );
};
