import { ThemeProvider } from 'styled-components'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { pinkTheme } from './theme'
import FlashScreen from './components/FlashScreen'

import { LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import React from 'react'
import Routing from './Routing'


function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={pinkTheme}>
				<LocalizationProvider dateAdapter={DateAdapter}>
					<FlashScreen />
					<Routing />
				</LocalizationProvider>
			</ThemeProvider>
		</StyledEngineProvider>

	);
}

export default App