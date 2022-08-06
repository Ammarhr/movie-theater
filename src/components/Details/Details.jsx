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
				<div className="details-container">
					<div className="movies">
						<div className="movies-details">	<img className="movies__image" src={movieDetails.poster} alt={movieDetails.title} />
							<div className="movies__about">
								<div className="about__content" >
									<h1 className="movies__title">{movieDetails.title}<span className="movies__year"> ({movieDetails.imdb_rating})</span></h1>
									<div className="movies__rating-box">
										<div className="movies__rating">
											<p className="movies__rating-num"><span> {movieDetails.released_on?.split('-')[0]}</span> | <span> {movieDetails.length}</span> | <span> {movieDetails.director}</span></p>
										</div>
										<div className="movies__actors"><span className="movies__actor-text">Cast: </span><span className="movies__actor">{movieDetails.cast}</span></div>
										<div className="movies__genres"><span className="movies__genre">{movieDetails.genres?.join(' ')}</span></div>
									</div>
									<br />
									<p className="movies__description">{movieDetails.overview}</p>
								</div>
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