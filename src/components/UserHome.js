import React from 'react'
import bikeImage from './../images/user-home-bikes.jpg'
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import { StyledButton } from './core/StyledButton'
import { useNavigate } from 'react-router-dom'

const StyledImage = styled.img`
    width: 90%;
    margin: 40px 0px
`

function UserHome() {
    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1, flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
            <StyledImage src={bikeImage} />
            <Typography variant='h4' gutterBottom>
                Welcome to SEA
            </Typography>
            <Typography variant='subtitle1' lineHeight='1.25' textAlign='center' fontSize='1.25rem' color='#636363'>
                Sell your bike in less time for <br /> good price
            </Typography>
            <StyledButton
                fullWidth
                size='large'
                variant="contained"
                style={{ width: '90%', marginTop: '40px' }}
                onClick={() => navigate('/user/sell-vehicle/company-details')}
            >
                Sell Your Bike
            </StyledButton>
        </Box>
    )
}

export default UserHome