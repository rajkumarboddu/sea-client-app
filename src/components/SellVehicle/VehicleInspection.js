import React, { useState } from 'react'
import { Box, Grid, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import styled from 'styled-components'

const GridItem = styled(Grid)`
	width: 90vw;
`

function VehicleInspection() {
    const [timeSlot, setTimeSlot] = useState()
    const [inspectionDate, setInspectionDate] = useState()

    return (
        (
            <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container direction="column" rowSpacing={4} justifyContent="center" alignItems="center">
                    <GridItem item>
                        <DatePicker
                            fullWidth
                            inputFormat='dd/MM/yyyy'
                            label="Select vehicle inspection date"
                            value={inspectionDate}
                            onChange={(newDate) => {
                                setInspectionDate(newDate);
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
                        <FormControl fullWidth>
                            <InputLabel id="timeslot-label">Time slot</InputLabel>
                            <Select
                                labelId="timeslot-label"
                                id="timeslot-select"
                                label="timeslot"
                            >
                                <MenuItem value="9-10 AM">9-10 AM</MenuItem>
                            </Select>
                        </FormControl>
                    </GridItem>
                </Grid>
            </Box>
        )
    )
}

export default VehicleInspection