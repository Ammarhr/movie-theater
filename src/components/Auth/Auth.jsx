import { useNavigate } from "react-router-dom";
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { MoviesContext } from '../../context/MoviesContext';
import { useContext } from 'react';
import cookie from 'react-cookies';
import './auth.scss'

function Auth () {

	const { token, setToken } = useContext(MoviesContext);
	let navigate = useNavigate();

	const logIn = () => {

		signInWithPopup(auth, provider).then(result => {

			
			const { displayName, email, photoURL } = result.user;
			localStorage.setItem('user', JSON.stringify({ displayName, email, photoURL }))
			
			cookie.save('login', result.user.accessToken)
			cookie.save('wookie-token', process.env.REACT_APP_TOKEN)

			setToken(cookie.load('login'))
			navigate("/", { replace: true });
		}).catch(err => {
			console.log(err)
		});
	}

	return (
		<>
			{!token ? (
				<div>
					<>
						<section className="login">
							<div className="login_box">
								<div className="left">
									<div className="left-text">
										<h2>Sign In With Google</h2>
										<h3>To Enjoy Our App</h3>
									</div>
									<div className="contact">
										<div className="google-btn" onClick={logIn}>
											<div className="google-icon-wrapper" >
												<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
											</div>
											<p  className="btn-text"><b>Sign in with google</b></p>
										</div>
									</div>
								</div>
								<div className="right">
									<div className="right-text">
										<h2>Welcome To Wookie Movies</h2>
										<h5>Enjoy Your Time</h5>
									</div>
								</div>
							</div>
						</section>
					</>
				</div>
			) : ''}
		</>
	)
}

export default Auth;