import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import styled from 'styled-components'

const StyledGridContainer = styled(Grid)(props => ({
    background: props.theme.background,
    height: '100vh',
    width: '100vw',
    '-webkit-animation-name': 'fadeOut',
    'animation-name': 'fadeOut',
    '-webkit-animation-duration': '1.5s',
    'animation-duration': '1.5s',
    '-webkit-animation-fill-mode': 'both',
    'animation-fill-mode': 'both'
}))

function FlashScreen() {
    const [isFadedOut, setIsFadedOut] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsFadedOut(true), 1500)
    }, [])

    return (
        !isFadedOut &&
        <StyledGridContainer container alignItems="center" justifyContent="center">
            <Grid item>
                <Typography variant='h3' component='h1' color="white">SEA</Typography>
            </Grid>
        </StyledGridContainer>
    )
}

export default FlashScreen