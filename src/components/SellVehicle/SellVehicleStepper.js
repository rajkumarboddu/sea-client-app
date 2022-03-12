import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton } from '../core/StyledButton'

function SellVehicleStepper() {
	const sellVehicleRoute = '/user/sell-vehicle/'
	const steps = ['company-details', 'kms-details', 'inspection', 'review']
	const [currentStep, setCurrentStep] = useState(0)
	const navigate = useNavigate()
	const location = useLocation();

	useEffect(() => {
		if(currentStep === -1) return navigate('/user')
		const nextPathname = `${sellVehicleRoute}${steps[currentStep]}`
		const pathRegex = new RegExp(`^${nextPathname}`)
		if(pathRegex.test(location.pathname)) return
		navigate(nextPathname)
	}, [currentStep])

	const goToPrev = () => {
		setCurrentStep(currentStep-1)
	}

	const goToNext = () => {
		if(currentStep === steps.length-1) {
			// submit form
			navigate('/user')
		} else {
			setCurrentStep(currentStep+1)
		}
	}

	return (
		<Box sx={{ display: 'flex', flexGrow: 1, width: '90vw', padding: '0 20px' }}>
			<StyledButton
				size='large'
				styletype="secondary"
				variant="outlined"
				style={{ flexGrow: 0.5, marginRight: '20px' }}
				onClick={goToPrev}
			>
				Previous
			</StyledButton>
			<StyledButton size='large' style={{ flexGrow: 1 }} onClick={goToNext}>Next</StyledButton>
		</Box>
	)
}

export default SellVehicleStepper