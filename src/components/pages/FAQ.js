import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const FAQ = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <Box padding={3} bgcolor='secondary.light'>
                <Box display={'flex'} sx={{backgroundColor:'rgba(255,255,255,20%)'}}>
                    <Box p={5} sx={{backgroundColor:'rgba(255,255,255,20%)'}} borderRadius={'50%'} borderRight={5}>
                        <Typography variant='h3'>
                            Q1
                        </Typography>
                    </Box>
                    <Box p={5}>
                        <Typography variant='h5' sx={{textDecoration:'underline'}}>
                            Question: Where are you located?
                        </Typography>
                        <Typography variant='h5'>
                            Answer: We are located at Jamal, Kantipath, Kathmandu. Above Nabil Bank.
                        </Typography>

                    </Box>
                </Box>

                <Box padding={5} boxShadow={5} bgcolor={'white'} width={'50%'} margin={'auto'} marginTop={5}>
                    <Typography variant='h5'>
                        Enquiry Form
                    </Typography>
                    <TextField label='E-mail' fullWidth required/>
                    <TextField label='Subject' fullWidth required/>
                    <TextField label='Body' fullWidth required multiline rows={3} variant='filled' bgcolor='green'/>
                    <Button variant='contained' color='secondary' fullWidth sx={{marginTop:'3px'}}>Submit</Button>
                </Box>


            </Box>
        </Container>

        <Footer/>
    </>
  )
}

export default FAQ