import styled from "styled-components"
import { Switch } from "@mui/material"
import { alpha } from '@mui/material/styles'

export const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: theme.color,
        '&:hover': {
            backgroundColor: alpha(theme.color, 0.08),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: theme.color,
    },
}));