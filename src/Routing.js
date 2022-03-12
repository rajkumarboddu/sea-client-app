import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import Login from './components/Login'
import UserHome from './components/UserHome'
import UserLayout from './components/UserLayout'
import SellVehicle from './components/SellVehicle/SellVehicle'
import VehicleCompanyDetails from './components/SellVehicle/VehicleCompanyDetails'
import VehicleInspection from './components/SellVehicle/VehicleInspection'
import VehicleKmsDetails from './components/SellVehicle/VehicleKmsDetails'
import VehicleDetailsReview from './components/SellVehicle/VehicleDetailsReview'

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='user' element={<UserLayout />}>
                    <Route index element={<UserHome />} />
                    <Route path='sell-vehicle' element={<SellVehicle />}>
                        <Route path='company-details' element={<VehicleCompanyDetails />} />
                        <Route path='inspection' element={<VehicleInspection />} />
                        <Route path='kms-details' element={<VehicleKmsDetails />} />
                        <Route path='review' element={<VehicleDetailsReview />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing