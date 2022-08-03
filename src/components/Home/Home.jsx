import { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
// import Cookies from 'react-cookies';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import './home.scss'

function Home () {

	const [data, setData] = useState([]);
	const [genres, setGeners] = useState(['Biography', 'Drama', 'History', 'Crime', 'Mystery', 'Thriller', 'Action', 'Adventure', 'War', 'Animation', 'Family'])
	const handleGetMovie = () => {
		axios.get('https://wookie.codesubmit.io/movies', {

			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer Wookie2021'
			},
		}).then(response => {
			console.log('data-------->', response.data);
			setData(response.data.movies);
			return response.data.movies;
		}).catch(err => console.log(err));
	}

	useEffect(() => {
		handleGetMovie();
	}, [])

	return (
		<>
		<Header />
			{genres ? genres.map(genre => {
				return (<>
					<h1>{genre}</h1>
					<div className="cards-container">
						{data ? data.filter((result) => result.genres.includes(genre)).map(result => {
							return (
								<Cards movieData={result} />
							)
						}) : ''}
					</div>
				</>
				)

			}) : ''}

		</>
	)
}

export default Home;