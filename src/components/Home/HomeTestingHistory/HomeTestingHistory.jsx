import db from '../../../db/question.json';
import { CardQuestion } from './CardQuestion/CardQuestion';

export const HomeTestingHistory = () => {
  return (
    <ul>
      <CardQuestion data={db} />
    </ul>
  );
};
