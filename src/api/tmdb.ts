import fetch from 'node-fetch';

const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGU4N2NkZDk4MmFiODkzYmYyZWMzMzJiNjRjNjA2ZSIsInN1YiI6IjY1YzQ3NmFkMTk0MTg2MDE2Mjc1OGEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD_1ax-fSNbo-BV-RYe7Lt40moUP8JU4di8RTjE_Dlk',
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error('error:' + err));

export default fetch;
