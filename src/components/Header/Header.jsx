import { useState, useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';

function Header () {
	const [searchItem, setSearchItem] = useState({});
	// let user = JSON.parse(localStorage.getItem('user'))
	const [userName, setUserName] = useState(JSON.parse(localStorage.getItem('user')).displayName)
	const { setData, setGeners, handleLogOut } = useContext(MoviesContext);
	let navigate = useNavigate();

	const handleChange = (e) => {
		setSearchItem(e.target.value)
	}
	const handleSearch = (e) => {
		e.preventDefault()
		axios.get(`https://wookie.codesubmit.io/movies?q=${searchItem}`, {

			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer Wookie2021'
			},
		}).then(response => {
			if (response.data.movies.length !== 0) {

				setGeners(['Search Results'])
				setData(response.data.movies);
				navigate("/", { replace: true });

				return response.data.movies;
			} else {
				setGeners(null);
			}
		}).catch(err => console.log(err));
	}

	return (
		<Navbar data-testid="header-1">
			<Container fluid>
				<Navbar.Brand href="/">
					<span style={{ color: "white" }}> Wookie <br /> Movies</span>
				</Navbar.Brand>
				<Navbar.Brand href="/">
					{userName ? <h6>{userName}</h6>  : ''}
					<Button onClick={handleLogOut}>LogOut</Button>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
					</Nav>
					<Form className="d-flex" onSubmit={handleSearch}>
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							onChange={(e) => handleChange(e)}
						/>
						<Button type='submit'>Search</Button>
					</Form>

				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;