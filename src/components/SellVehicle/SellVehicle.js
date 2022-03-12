import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SellVehicleStepper from './SellVehicleStepper'

function SellVehicle() {

	useEffect(() => {
		sessionStorage.removeItem('sell_vehicle')
	}, [])

	return (
		<>
			<Outlet />
			<SellVehicleStepper />
		</>
	)
}

export default SellVehicle