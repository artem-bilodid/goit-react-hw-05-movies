import API_CONST from './api-const';

const { API_KEY, BASE_URL, TRENDING_ENDPOINT, SEARCH_ENDPOINT, MOVIE_ENDPOINT, CAST_ENDPOINT } =
  API_CONST;

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${TRENDING_ENDPOINT}?api_key=${API_KEY}`);
    const data = await response.json();

    return data.results;
  } catch (error) {
    alert(error);
  }
};

export const searchMovies = async query => {
  const response = await fetch(`${BASE_URL}/${SEARCH_ENDPOINT}?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();

  return data.results;
};

export const fetchMovie = async movieId => {
  const response = await fetch(`${BASE_URL}/${MOVIE_ENDPOINT}/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();

  return data;
};

export const fetchCastInfo = async movieId => {
  const transformedCastEndpoint = CAST_ENDPOINT.replace('{movie_id}', movieId);

  const response = await fetch(`${BASE_URL}/${transformedCastEndpoint}?api_key=${API_KEY}`);
  const data = await response.json();

  return data.cast;
};
