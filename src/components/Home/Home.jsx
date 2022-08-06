
import React, { useEffect, useContext, Suspense } from 'react';
import { useNavigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap'
import { MoviesContext } from '../../context/MoviesContext';
import MoviesSlider from '../MoviesSlider/MoviesSlider'
import './home.scss'

const Cards = React.lazy(() => import('../Cards/Cards'));

function Home () {
	let navigate = useNavigate();
	let keyCounter = 1;
	const { data, genres, token } = useContext(MoviesContext);

	useEffect(() => {

		if (!token) {
			navigate("/auth", { replace: true });
		} else {
			navigate("/", { replace: true });
		}

	}, [navigate, token])

	return (
		<Suspense fallback={<Spinner />}>
			<MoviesSlider />
			{genres ? genres.map(genre => {
				return (
					<>
						<h1 key={genre}>{genre}</h1>
						<div key={keyCounter + genre} className="cards-container">
							{data ? data.filter((result) => result.genres.includes(genre) || genres.includes('Search Results')).map(result => {
								return (
									<Cards key={result.id} movieData={result} />
								)
							}) : (
								<Spinner key={genre + keyCounter} animation="border" role="status">
									<span className="visually-hidden">Loading...</span>
								</Spinner>
							)}
						</div>
					</>

				)
			}) : <h1>There is no result</h1>}
		</Suspense>

	)
}

export default Home;