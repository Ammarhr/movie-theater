import { useNavigate } from "react-router-dom";
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { MoviesContext } from '../../context/MoviesContext';
import { useContext} from 'react';
import cookie from 'react-cookies';

function Auth () {

	const { isLogged, setIsLogged} = useContext(MoviesContext);
	let navigate = useNavigate();

	const logIn = () => {

		signInWithPopup(auth, provider).then(result => {
			console.log(result, 'this is from auth provider');
			cookie.save('login', result.user.accessToken)

			const { displayName, email, photoURL } = result.user;
			localStorage.setItem('user', { displayName, email, photoURL })
			setIsLogged(true)
			navigate("/", { replace: true });
	}).catch(err => {
			console.log(err)
	});
	}

	return (
		<>
			{!isLogged ? (
				<div>
					<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
					<div className="google-btn">
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
						</div>
						<p onClick={logIn} className="btn-text"><b>Sign in with google</b></p>
					</div>
				</div>
			) : ''}
		</>
	)
}

export default Auth;