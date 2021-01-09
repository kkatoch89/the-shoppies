import axios from 'axios';

export const axiosFirebase = axios.create({
	baseURL: 'https://react-my-burger-e5e5e.firebaseio.com/',
});

export const axiosOMDB = axios.create({
	baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=c1e5066c',
});
