import { Grid, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { StyledButton } from './core/StyledButton'
import { validateEmail, validateMobile } from '../utils'
import { useNavigate } from 'react-router-dom'

const GridItem = styled(Grid)`
	width: 90vw;
`

function Login() {
	const [formState, setFormState] = useState({
		username: '',
		pwd: '',
		showPwd: false,
		invalidUsername: false,
		invalidPwd: false
	})
	const [disabledLoginBtn, setDisabledLoginBtn] = useState(true)
	const theme = useTheme();
	const navigate = useNavigate();

	const handleClickShowPassword = (e) => {
		e.preventDefault();
		setFormState({
			...formState,
			showPwd: !formState.showPwd
		})
	}

	const handleMouseDownPassword = (e) => e.preventDefault()

	const handleChange = (stateProp) => (e) => {
		setFormState({
			...formState,
			[stateProp]: e.target.value.trim()
		})
	}

	const isValidUsername = (username) => {
		return validateEmail(username) || validateMobile(username)
	}

	const isValidPwd = (pwd) => pwd.length >= 6

	const handleBlur = (stateProp) => (e) => {
		const newState = {
			...formState
		};

		if(stateProp === 'username' && formState.username.length) {
			newState.invalidUsername = !isValidUsername(formState.username)
		} else if(stateProp === 'pwd' && formState.pwd.length) {
			newState.invalidPwd = !isValidPwd(formState.pwd)
		}
		console.log(newState)
		setFormState(newState)
	}

	const doLogin = (e) => {
		e.preventDefault()
		console.log(formState)
	}

	useEffect(() => {
		if(
			isValidUsername(formState.username) &&
			isValidPwd(formState.pwd) &&
			formState.username.length > 0 &&
			formState.pwd.length > 0
		) {
			setDisabledLoginBtn(false)
		} else {
			setDisabledLoginBtn(true)
		}
	}, [formState])

	return (
		<Grid container style={{ height: '100vh' }} direction="row" justifyContent="center" alignItems="center">
			<Grid container direction="column" rowSpacing={2} justifyContent="center" alignItems="center">
				<Grid item xs={12} marginBottom={4}>
					<Typography color={theme.color} variant='h3' component='h1'>SEA</Typography>
				</Grid>
				<GridItem item xs={12}>
					<TextField
						fullWidth
						error={formState.invalidUsername}
						helperText={formState.invalidUsername && "Incorrect Email/Mobile"}
						label="Email/Mobile"
						id="outlined-start-adornment"
						onChange={handleChange('username')}
						onBlur={handleBlur('username')}
					/>
				</GridItem>
				<GridItem item xs={12}>
					<FormControl fullWidth variant="outlined">
						<InputLabel error={formState.invalidPwd} htmlFor="password">Password</InputLabel>
						<OutlinedInput
							id="password"
							error={formState.invalidPwd}
							type={formState.showPwd ? 'text' : 'password'}
							value={formState.pwd}
							onChange={handleChange('pwd')}
							onBlur={handleBlur('pwd')}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{formState.showPwd ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
						{
							formState.invalidPwd &&
							<FormHelperText error={formState.invalidPwd} id="password-helper-text">Password should have min 6 chars</FormHelperText>
						}
					</FormControl>
				</GridItem>
				<GridItem item marginTop={4}>
					<StyledButton 
						onClick={doLogin}
						disabled={disabledLoginBtn}
						fullWidth
						size='large'
						variant="contained"
						disableElevation
						onClick={() => navigate('/user')}
					>
						Login
					</StyledButton>
				</GridItem>
			</Grid>
		</Grid>
	)
}

export default Login