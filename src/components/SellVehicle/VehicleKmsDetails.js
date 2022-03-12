import { Box, Grid, TextField, InputAdornment, FormGroup, FormControlLabel, Switch } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { StyledSwitch } from '../core/StyledSwitch'

const GridItem = styled(Grid)`
	width: 90vw;
`

function VehicleKmsDetails() {
    const [registrationDate, setRegistrationDate] = useState();
    const [insuranceExpDate, setInsuranceExpDate] = useState();
    const theme = useTheme();

    return (
        <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container direction="column" rowSpacing={4} justifyContent="center" alignItems="center">
                <GridItem item>
                    <TextField
                        fullWidth
                        label="Kilometers covered"
                        type="number"
                    />
                </GridItem>
                <GridItem item>
                    <DatePicker
                        fullWidth
                        inputFormat='dd/MM/yyyy'
                        label="Registration end date"
                        value={registrationDate}
                        onChange={(newDate) => {
                            setRegistrationDate(newDate);
                        }}
                        renderInput={(params) => <TextField
                            fullWidth
                            {...params}
                            helperText={null}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"> <CalendarTodayIcon /> </InputAdornment>
                            }}
                        />
                        }
                    />
                </GridItem>
                <GridItem item>
                    <FormGroup>
                        <FormControlLabel
                            sx={{ marginLeft: '0', justifyContent: 'space-between' }}
                            labelPlacement="start" control={<StyledSwitch defaultChecked />}
                            label="Insurance available"
                        />
                    </FormGroup>
                </GridItem>
                <GridItem item>
                    <DatePicker
                        fullWidth
                        inputFormat='dd/MM/yyyy'
                        label="Insurance valid till"
                        value={insuranceExpDate}
                        onChange={(newDate) => {
                            setInsuranceExpDate(newDate);
                        }}
                        renderInput={(params) => <TextField
                            fullWidth
                            {...params}
                            helperText={null}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"> <CalendarTodayIcon /> </InputAdornment>
                            }}
                        />
                        }
                    />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default VehicleKmsDetails