import { useState } from 'react';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? <HomePage /> : <AuthPage />;
};

export default App;
