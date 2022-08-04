import { useContext } from 'react';
import {Carousel, Spinner} from 'react-bootstrap';
import { MoviesContext } from '../../context/MoviesContext';


function MoviesSlider () {
	const { data } = useContext(MoviesContext);
	
	return (
		<>
			<Carousel>
				{data ? data.map(result => {
					return (
							<Carousel.Item key={result.id}>
								<img
									className="d-block w-100"
									src={result.backdrop}
									alt="First slide" 
									style={{width:'30% !important',hight:'auto !important'}}
								/>
								<Carousel.Caption>
									<h3>{result.title}</h3>
									<p>{result.director} <br></br> {result.genres.join(' ')}</p>
									<p>{result.length} | {result.classification}</p>
								</Carousel.Caption>
							</Carousel.Item>
					)
				}) : (
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				)}
			</Carousel>
		</>
	);
}

export default MoviesSlider;