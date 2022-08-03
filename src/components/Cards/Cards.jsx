import { Card } from 'react-bootstrap';

function Cards (props) {

	let keyCounter = 0;


	return (
		<Card className="card" key={keyCounter++}>
			<Card.Img alt={''} variant="top" src={props.movieData.poster} />
			<Card.Body>
				<Card.Text>
				{props.movieData.title}
				</Card.Text>
			</Card.Body>
			<div style={{ textAlign: 'center', margin: '5%' }}>
					{/* <Details key={props.shop.id} shop={shopItem} /> */}
			</div>
		</Card>
	)
}

export default Cards;