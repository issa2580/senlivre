import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { icons } from '@/icons/icons';

// const icons = [
//     {icon: <FacebookIcon />},
//     {icon: <TwitterIcon />},
//     {icon: <InstagramIcon />}
// ]

const titleStyles = {
  fontFamily: 'Inter',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '48px',
  letterSpacing: '3px'
}

const itemStyles = {
  fontFamily: 'Inter',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '36px',
}

const proposData = [
  {title: 'Qui sommes-nous'},
  {title: 'Carrières'},
  {title: 'Conditions Générales d’utilisation'},
  {title: 'Nos Boutiques Officielles '},
]

const servicesData = [
  {title: 'Aide et FAQ'},
  {title: 'Contactez-nous'},
  {title: 'Acheter sur Sen Livres'},
  {title: 'Livraisons'},
  {title: 'Paiement'},
]

const Footer = () => {
  return (
    <Box sx={{background: '#F5F5F5'}}>
      <Container>
        <Grid
          sx={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            textAlign: {xs: 'center', md: 'center', lg: 'start'}
          }}
          color='#908D8D'
          container
          spacing={{xs: 2, md: 3, lg: 5}}
          columns={{xs: 1, md: 1, lg: 3}}>
          <Grid
            item xs={1} md={1} lg={1}>
            <h1 style={{...titleStyles}}>A PROPOS</h1>
            {proposData.map(item => (
              <Box sx={{display: 'flex', flexDirection: 'column', py: '5px'}}>
                <Typography sx={{...itemStyles}}>{item.title}</Typography>
              </Box>
            ))}
          </Grid>
          <Grid
            item xs={1} md={1} lg={1}>
              <Box 
                sx={{
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '30px',
                  width: '60%',
                  mx: 'auto',
                  height: '45px',
                  background: '#5A20CB',
                  borderRadius: '5px',
                  color: '#FFFFFF'
                }}>
                {<icons.FacebookIcon />}
                {<icons.TwitterIcon />}
                {<icons.InstagramIcon />}
              </Box>
          </Grid>
          <Grid
            item xs={1} md={1} lg={1}>
            <h1 style={{...titleStyles}}>SERVICE CLIENT</h1>
            {servicesData.map(item => (
              <Box sx={{display: 'flex', flexDirection: 'column', py: '5px'}}>
                <Typography sx={{...itemStyles}}>{item.title}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
