import React, { useEffect , useState } from 'react'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom'


function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('');


	async function submit(e) {
		e.preventDefault();
		try {
		  await axios.post('http://localhost:5000/login', {
			email,
			password,
		  });

		  navigate('/home');
		} catch (error) {
		  setError('Invalid email or password');
		}
	  }

	return (
		<div class="login_form_container">
			<div class="login_form">
				<h2>SignIn</h2>
				<div class="input_group">
					<i class="fa fa-user"></i>
					<input
						type="email"
						placeholder="Email"
						class="input_text"
						autocomplete="off"
						value={email}
						onChange={(e) => { setEmail(e.target.value) }}
					/>
				</div>
				<div class="input_group">
					<i class="fa fa-unlock-alt"></i>
					<input
						type="password"
						placeholder="Password"
						class="input_text"
						value={password}
						autocomplete="off"
						onChange={(e) => { setPassword(e.target.value) }}
					/>
				</div>
				{error && <p style={{ color: '#881919' }}>{error}</p>}
				<div class="button_group" id="login_button">
					<a onClick={submit}>Submit</a>
				</div>
				<div class="fotter">
					<a>Forgot Password ?</a>
					<a onClick={() => { navigate('/signup') }}>SignUp</a>
				</div>
			</div>
		</div>
	)
}
export default Login
