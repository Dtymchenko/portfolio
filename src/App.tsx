import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPassPage from './pages/ForgotPassPage';
import NotFoundPage from './pages/NotFoundPage';
import WebShopPage from './pages/WebShopPage';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import WeatherPage from './pages/WeatherPage';
import { useAppSelector, useAppDispatch } from './hooks/redux-hooks';
import { setMenuOpen } from './redux/slices/mainSlice';
import RandomColor from './components/RandomColor/RandomColor';
import TodoListPage from './pages/TodoListPage';
import AutoCompletePage from './pages/AutoCompletePage';
import ConverterPage from './pages/ConverterPage';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setMenuOpen(false));
  }, []);

  const menuOpen = useAppSelector((state) => state.main.menuOpen);

  return (
    <div className="wrapper">
      <Header />
      {menuOpen && <BurgerMenu />}
      <div className="content">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPassPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/projects/webshop/*" element={<WebShopPage />} />
          <Route path="/projects/weather/*" element={<WeatherPage />} />
          <Route path="/projects/random-color/*" element={<RandomColor />} />
          <Route path="/projects/todo-list/*" element={<TodoListPage />} />
          <Route
            path="/projects/autocomplete/*"
            element={<AutoCompletePage />}
          />
          <Route path="/projects/converter/*" element={<ConverterPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
