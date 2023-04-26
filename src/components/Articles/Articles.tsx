import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const Articles = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Articles;
