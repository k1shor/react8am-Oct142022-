import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import { Book, Facebook, FacebookSharp, Instagram, Share, Twitter } from '@mui/icons-material';

const Contact = () => {
  return (
    <>
        <Navbar/>
        <Container>
        <Box p={5} boxShadow={5} marginTop={5} borderRadius={5}>
            <Typography variant='h3' color='red' className='text-decoration-underline'>
                Contact
            </Typography>
            <Container>
<Grid container 
// display={'flex'}
// justifyContent={'space-evenly'}
spacing={5}
padding={5}
>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="logo192.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="logo192.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Instagram/>
        </IconButton>
        <Button size="small" startIcon={<Facebook/>}>Share</Button>
        <Button size="small" endIcon= {<Share/>}>Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="logo192.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share
        <FacebookSharp/>
        <Twitter/>
        <Facebook/>
        </Button>
        <Button size="small">Learn More
        <Book/>
        </Button>
      </CardActions>
    </Card></Grid>
</Grid>


</Container>
        </Box>
        </Container>
        <Footer/>
    </>
  )
}

export default Contact