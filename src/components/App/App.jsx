import s from './App.module.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './../Header';
import Container from './../Container';
import Navigation from './../Navigation';
import Home from './../../views/Home';
import Movies from './../../views/Movies';
import MovieDetails from './../../views/MovieDetails';

const App = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
