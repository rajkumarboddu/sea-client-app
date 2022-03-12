import React from 'react'
import Header from './Header'
import SellVehicle from './SellVehicle/SellVehicle'
import UserHome from './UserHome'
import { Outlet } from 'react-router-dom'

function UserLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default UserLayout