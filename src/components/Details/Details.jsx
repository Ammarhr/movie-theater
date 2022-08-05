import { useEffect, useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { MoviesContext } from '../../context/MoviesContext';
import './details.scss'

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
						<div className="details-container">
							<div className="card-details">	<img className="card__image" src={movieDetails.poster} alt={movieDetails.title} />
								<div className="card__about">
									<h1 className="card__title">{movieDetails.title}<span className="card__year"> ({movieDetails.imdb_rating})</span></h1>
									<div className="card__rating-box">
										<div className="card__rating">
										<p className="card__rating-num"><span> {movieDetails.released_on?.split('-')[0]}</span> | <span> {movieDetails.length}</span> | <span> {movieDetails.director}</span></p>
										</div>
									<div className="card__actors"><span className="card__actor-text">Cast: </span><span className="card__actor">{movieDetails.cast}</span></div>
									<div className="card__genres"><span className="card__genre">{movieDetails.genres?.join(' ') }</span></div>
									</div>
									<br/>
									<p className="card__description">{movieDetails.overview}</p>
								</div>
							</div>
						</div>
				</div>
			) : (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)
			}

		</>
	)
}

export default Details;