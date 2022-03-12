import styled from "styled-components";
import { Button } from "@mui/material";

let variant;

let button = styled(Button)(props => {
    variant = props.styletype || 'primary'
    const styledObj = {
        background: props.theme[variant].background,
        opacity: props.disabled ? 0.5 : 1,
        color: props.theme[variant].textColor
    }

    if(props.variant === 'outlined') {
        styledObj.borderColor = props.theme[variant].borderColor
    }

    return styledObj
})

export const StyledButton = styled(button)`
    &:hover {
        border-color: ${props => props.theme[variant].borderColor}
    }
`