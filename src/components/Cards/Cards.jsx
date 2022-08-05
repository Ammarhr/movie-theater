import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Cards (props) {

	return (
			<Card className="card" data-testid="cards-1">
				<Card.Img alt={props.movieData.title} variant="top" src={props.movieData.poster} />
				<Card.Body>
						<div style={{ textAlign: 'center', margin: '5%' }}>
					<Card.Text>
							<Link to={`details/${props.movieData.id}`}>{props.movieData.title}</Link>
					</Card.Text>
						</div>
				</Card.Body>
			</Card>
	)
}

export default Cards;