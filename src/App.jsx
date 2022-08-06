import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesContext } from './context/MoviesContext';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Auth from './components/Auth/Auth';
import axios from 'axios';
import cookie from 'react-cookies';
import './App.css';

function App () {

	const [data, setData] = useState([]);
	const [genres, setGeners] = useState(['Biography', 'Drama', 'History', 'Crime', 'Mystery', 'Thriller', 'Action', 'Adventure', 'War', 'Animation', 'Family'])
	const [token, setToken] = useState(cookie.load('login'));

	const handleGetMovie = () => {
		axios.get('https://wookie.codesubmit.io/movies', {

			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${cookie.load('wookie-token')}`
			},
		}).then(response => {

			setData(response.data.movies);
			return response.data.movies;
		}).catch(err => console.log(err));
	}

	const trigegerLogged = async () => {

		await setToken(cookie.load('login'))
	}
	
	const handleLogOut = () => {
		cookie.remove('login');
		cookie.remove('wookie-token');
		setToken(null)
	}

	useEffect(() => {
		trigegerLogged()
		handleGetMovie();
	}, [token])

	return (
		<MoviesContext.Provider value={{ data, setData, genres, setGeners, handleLogOut, token, setToken }}>
			{token ? (
				<Router>
					<Header />
					<div className="App">
						<Routes>
							<Route path='/auth' element={<Auth />}></Route>
							<Route path='/' element={<Home />}></Route>
							<Route path={`/details/:id`} element={<Details />}></Route>
						</Routes>
					</div>
				</Router>
			) : (
				<>
					<Router>
						<div className="App">
							<Routes>
								<Route path='/' element={<Home />}></Route>
								<Route path='/auth' element={<Auth />}></Route>
							</Routes>
						</div>
					</Router>
				</>
			)}

		</MoviesContext.Provider>
	);
}

export default App;
