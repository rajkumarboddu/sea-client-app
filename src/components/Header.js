import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import styled, { useTheme } from 'styled-components'

const StyledIconButton = styled(IconButton)`
    color: ${props => props.theme.color}
`

function Header() {
    const theme = useTheme()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color={theme.color}
                    >
                        SEA
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                        >
                            <NotificationsIcon htmlColor={theme.color} />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                        >
                            <AccountCircle htmlColor={theme.color} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header