import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesContext } from './context/MoviesContext';
import Header from './components/Header/Header'
import MoviesSlider from './components/MoviesSlider/MoviesSlider';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import axios from 'axios';
import './App.css';



function App () {
	const [data, setData] = useState([]);

	const handleGetMovie = () => {
		axios.get('https://wookie.codesubmit.io/movies', {

			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer Wookie2021'
			},
		}).then(response => {

			setData(response.data.movies);
			return response.data.movies;
		}).catch(err => console.log(err));
	}

	useEffect(() => {
		handleGetMovie();
	}, [])

	return (
		<MoviesContext.Provider value={{data, setData}}>
			<Router>
				<div className="App">
					<Header />
					<MoviesSlider />
					<Routes>
						<Route  path='/' element={<Home />}></Route>
						<Route  path={`/details/:id`} element={<Details />}></Route>
					</Routes>
				</div>
			</Router>
		</MoviesContext.Provider>
	);
}

export default App;
