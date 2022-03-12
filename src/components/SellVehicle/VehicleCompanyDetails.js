import { Box, FormControl, InputLabel, Select, MenuItem, Grid, TextField, InputAdornment } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import React, { useState } from 'react'
import styled from 'styled-components'


const GridItem = styled(Grid)`
	width: 90vw;
`

function VehicleCompanyDetails() {
    const [manYear, setManYear] = useState(null);

    return (
        <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container direction="column" rowSpacing={4} justifyContent="center" alignItems="center">
                <GridItem item>
                    <FormControl fullWidth>
                        <InputLabel id="company-label">Company</InputLabel>
                        <Select
                            labelId="company-label"
                            id="company-select"
                            // value={age}
                            label="Company"
                        // onChange={handleChange}
                        >
                            <MenuItem value="yamaha">Yamaha</MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem item>
                    <FormControl fullWidth>
                        <InputLabel id="model-label">Model</InputLabel>
                        <Select
                            labelId="model-label"
                            id="model-select"
                            // value={age}
                            label="Model"
                        // onChange={handleChange}
                        >
                            <MenuItem value="fz">Fz</MenuItem>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem item>
                    <DatePicker
                        fullWidth
                        views={['year']}
                        label="Manufacturing year"
                        value={manYear}
                        onChange={(newValue) => {
                            setManYear(newValue);
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

export default VehicleCompanyDetails