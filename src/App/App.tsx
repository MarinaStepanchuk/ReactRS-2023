import { Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Main from '../pages/Main/Main';
import AboutUs from '../pages/AboutUs/AboutUs';
import Error from '../pages/Error/Error';
import Header from '../components/Header/Header';
import Critiques from '../pages/Critiques/Critiques';
import { Paths } from '../constants/common.constants';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={Paths.main.path} element={<Main />} />
        <Route path={Paths.about.path} element={<AboutUs />} />
        <Route path={Paths.critiques.path} element={<Critiques />} />
        <Route path={Paths.error.path} element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
