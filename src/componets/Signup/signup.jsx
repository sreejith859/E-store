import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './signup.css'
import { useNavigate } from 'react-router-dom'


function Signup() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')

	function Register(e) {
		e.preventDefault();
		const userdata = {
			name: username,
			mail: email,
			password: password,
		}
		axios.post("http://localhost:5000/userdata", userdata).then((res) => {
			console.log(res.data)
		})
		navigate('/')
	}

	return (

		<div class="login_form_container">
			<form class="login_form" onSubmit={Register}>
				<h2>Sign Up</h2>
				<div class="input_group">
					<i class="fa fa-user"></i>
					<input
						type="text"
						placeholder="Username"
						class="input_text"
						autocomplete="off"
						onChange={(e) => { setUsername(e.target.value) }}
						required

					/>
				</div>
				<div class="input_group">
					<i class="fa fa-user"></i>
					<input
						type="email"
						placeholder="example@gmail.com"
						class="input_text"
						autocomplete="off"
						onChange={(e) => { setEmail(e.target.value) }}
						required
					/>
				</div>
				<div class="input_group">
					<i class="fa fa-unlock-alt"></i>
					<input
						type="password"
						placeholder="Password"
						class="input_text"
						autocomplete="off"
						onChange={(e) => { setPassword(e.target.value)}}
						required

					/>
				</div>

				<div class="button_group" id="signup_button">
					<a>
						<input type="submit" className='sbm-btn' value={'Register Now'} /></a>
				</div>

				<div class="s-fotter">
					<a onClick={() => { navigate('/') }} >I have an account </a>
				</div>
			</form>
		</div>
	)
}

export default Signup
