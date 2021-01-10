import axios from 'axios';

export const axiosFirebase = axios.create({
	baseURL: 'https://the-shoppies-a9286-default-rtdb.firebaseio.com/',
});

// export const axiosOMDB = axios.create({
// 	baseURL: `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
// });
