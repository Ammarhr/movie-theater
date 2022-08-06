import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Cards (props) {

	return (
		<Card className="card" data-testid="cards-1">
			<Link to={`details/${props.movieData.id}`}>
				<Card.Img alt={props.movieData.title} variant="top" src={props.movieData.poster} />
				<Card.Body>
					<div style={{ textAlign: 'center', margin: '5%' }}>
						<Card.Text>
							{props.movieData.title}
						</Card.Text>
					</div>
				</Card.Body>
			</Link>
		</Card >
	)
}

export default Cards;