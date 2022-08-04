import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Cards (props) {

	let keyCounter = 0;


	return (
		<Card className="card" key={keyCounter++}>
			<Card.Img alt={props.movieData.title} variant="top" src={props.movieData.poster} />
			<Card.Body>
				<Card.Text>
					<div style={{ textAlign: 'center', margin: '5%' }}>
						<Link to={`details/${props.movieData.id}`}>{props.movieData.title}</Link>
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Cards;