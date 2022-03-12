import { Typography, Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const DetailsContainer = styled(Box)`
    border: 1px solid #7d7d7d8c;
    border-radius: 10px;
    height: 80%;
    margin-top: 20px;
    padding: 10px;
`

const LightText = styled.span`
    color: #7d7d7d;
    padding-right: 10px;
`

const TextContainer = styled.div`
  line-height: 2.5;
`

function VehicleDetailsReview() {
  return (
    <Box sx={{ height: '75vh', margin: '20px' }}>
      <LightText>Please review your vehicle details</LightText>
      <DetailsContainer>
        <TextContainer>
          <LightText>Company</LightText> <span>Yamaha</span>
        </TextContainer>
        <TextContainer>
          <LightText>Model</LightText> <span>Fz</span>
        </TextContainer>
        <TextContainer>
          <LightText>Manufacturing year</LightText> <span>2021</span>
        </TextContainer>
        <TextContainer>
          <LightText>Kilometeres covered</LightText> <span>55000</span>
        </TextContainer>
        <TextContainer>
          <LightText>Registration end date</LightText> <span>20/1/2022</span>
        </TextContainer>
        <TextContainer>
          <LightText>Insurance valid till</LightText> <span>20/1/2022</span>
        </TextContainer>
        <TextContainer>
          <LightText>Vehicle inspection date</LightText> <span>20/1/2022</span>
        </TextContainer>
        <TextContainer>
          <LightText>Time slot</LightText> <span>9-10 AM</span>
        </TextContainer>
      </DetailsContainer>
    </Box>
  )
}

export default VehicleDetailsReview