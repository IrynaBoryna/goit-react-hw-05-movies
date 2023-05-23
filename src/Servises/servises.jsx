import axios from 'axios';

const api = '1e9768f515bbeb1d217569014504939a';
const url = 'https://api.themoviedb.org/3/';

const FetchMovie = async (query, queryParams) => {
  const response = await axios.get(
    `${url}${query}?api_key=${api}&query=${queryParams}`
  );
  return response.data;
};

export default FetchMovie;
