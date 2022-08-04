import { useEffect, useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { MoviesContext } from '../../context/MoviesContext';


function Details () {
	const [movieDetails, setMovieDetails] = useState({});
	const { data } = useContext(MoviesContext);
	let { id } = useParams();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getMovieDetails = async () => {
		setMovieDetails(await data.filter(movie => movie.id === id)[0])
		return true
	}
	useEffect(() => {
		getMovieDetails();
	}, [data, getMovieDetails])
	return (
		<>
			{movieDetails ? (
				<div>
					<span>{movieDetails.title}</span> |
					<span>{movieDetails.imdb_rating}</span> |
					<span>{movieDetails.director}</span> |
					<span>{movieDetails.released_on}</span>
					<h6>{movieDetails.cast}</h6>
					<h6>{movieDetails.length}</h6>
					<span>{movieDetails.imdb_rating}</span>
					<img src={movieDetails.poster} alt={movieDetails.title} />
					<p>{movieDetails.overview}</p>
				</div>

			) : (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)}

		</>
	)
}

export default Details;