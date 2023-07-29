export const CardQuestion = ({ data }) => {
  return data.map(item => (
    <li
      id={item.id}
      key={item.id + 'start'}
      style={{ margin: 10, color: 'white' }}
    >
      <p>{item.question}</p>
      <ul>
        {item.answers.map(item => (
          <li key={item.answer}> - {item.answer}</li>
        ))}
      </ul>
    </li>
  ));
};
