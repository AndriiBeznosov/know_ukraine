import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TestingHistory } from '../pages/TestingHistory';
import AuthPage from '../pages/AuthPage';

import { Layout } from '../Layout/Layout';
import { NotFound } from '../pages/NotFound';
import { HtmlCss } from '../pages/HtmlCss';
import { JavaScript } from '../pages/JavaScript';
import { React } from '../pages/React';
import { HomeTestingHistory } from '../components/Home/HomeTestingHistory/HomeTestingHistory';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [status, setAction] = useState(null);
  return isLogin ? (
    <div>
      <Routes>
        <Route path="/" element={<Layout status={status} setAction={setAction} />}>
          <Route index element={<HomeTestingHistory status={status} />} />
          <Route path="testing-history" element={<TestingHistory status={status} />} />
          <Route path="html-css" element={<HtmlCss status={status} />} />
          <Route path="javascript" element={<JavaScript status={status} />} />
          <Route path="react" element={<React status={status} />} />
        </Route>
        <Route path="*" element={<NotFound status={status} />} />
      </Routes>
    </div>
  ) : (
    <AuthPage />
  );
};

export default App;
