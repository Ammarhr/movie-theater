import { useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap'
import { MoviesContext } from '../../context/MoviesContext';
import Cards from '../Cards/Cards';
// import Footer from '../Footer/Footer';
import './home.scss'

function Home () {

	const { data } = useContext(MoviesContext);
	const [genres, setGeners] = useState(['Biography', 'Drama', 'History', 'Crime', 'Mystery', 'Thriller', 'Action', 'Adventure', 'War', 'Animation', 'Family'])

	return (
		<>
			{genres ? genres.map(genre => {
				return (<>
					<h1>{genre}</h1>
					<div className="cards-container">
						{data ? data.filter((result) => result.genres.includes(genre)).map(result => {
							return (
								<Cards movieData={result} />
							)
						}) : (
							<Spinner animation="border" role="status">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						)}
					</div>
				</>
				)

			}) : (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)}

		</>
	)
}

export default Home;