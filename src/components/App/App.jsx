import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from './../Header';
import Container from './../Container';
import Navigation from './../Navigation';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../../views/Home'));
const Movies = lazy(() => import(/* webpackChunkName: "movies" */ '../../views/Movies'));
const MovieDetails = lazy(() =>
  import(/* webpackChunkName: "movie-details" */ '../../views/MovieDetails'),
);

const App = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Suspense fallback={<Container>...</Container>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
