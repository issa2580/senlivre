import React from 'react';

import Image from 'next/image';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button/Button'
import Typography from '@mui/material/Typography';

import { images } from '@/images/images';
import { Container } from '@mui/material';

const homeStyles = {
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: '56px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
}as const

const descStyles = {
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '36px',
    textwrap: 'nowrap',
}as const

const btnStyles = {
    color: '#FFFFFF',
    display: 'inline-flex',
    padding: '13px 41px',
    alignItems: 'flex-start',
    gap: '10px',
    borderRadius: '5px',
    background: '#5A20CB',
    '&:hover': {
        background: '#FFFFFF',
        border: '1px solid #5A20CB',
        color: '#5A20CB',
    }
}as const

const textbtnStyles = {
    fontFamily: 'Inter',
    fontSize: '19px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    display: 'inline-flex',
    textTransform: 'none',
}as const

const textbtnStyle = {
    fontFamily: 'Inter',
    fontSize: '19px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    display: 'inline-flex',
    textTransform: 'none',
    '&:hover': {
        color: '#FFFFFF',
    }
}as const

const btnStyle = {
    color: '#5A20CB',
    fontFamily: 'Inter',
    fontSize: '19px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    border: '1px solid #5A20CB',
    '&:hover': {
        background: '#5A20CB',
    }
}



const Homes = () => {
    return (
        <Container>
            <Box 
                sx={{
                    width: {xs: 'auto', md: 'auto', lg: '100%'},
                    height: {xs: 'auto', md: 'auto', lg: '800px'},
                    display: {xs: 'block', md: 'block', lg: 'flex'},
                    justifyContent: {xs: 'center', md: 'center', lg: 'space-between'},
                    alignItems: {xs: 'center', md: 'center', lg: 'center'},
                    gap: {xs: 'auto', md: 'auto', lg:'20px'},
                }}>
                <Box 
                    sx={{
                        mt: {xs: '150px', md: '150px', lg: 0},
                        width: {xs: '100%', md: '100%', lg: '60%'},
                        mx: 'auto'
                    }}>
                    <Box>
                        <Typography className='customtitle' sx={{...homeStyles}}>
                            Faire votre choix en ligne grâce
                            à notre application, <span className='customtitle' style={{...homeStyles, color: '#5A20CB'}}>Sen Livres</span>.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{...descStyles, mt: '10px'}}>
                            Cette application permet aux clients d’acheter et de faire
                            leurs commandes en ligne.
                            Dans cette application,vous pouvez trouver tous les livres que vous 
                            souhaitent comme livres d’apprentissages,livres commerces etc...
                        </Typography>
                    </Box>
                    <Box sx={{pt: '70px', display: 'flex', gap: '20px'}}>
                        <Button sx={{...btnStyles}}>
                            <Typography sx={{...textbtnStyles,}}>Commander</Typography>
                        </Button>
                        <Button sx={{...btnStyle, background: 'white'}}>
                            <Typography sx={{...textbtnStyle}}>Ajouter au panier</Typography>
                        </Button>
                    </Box>
                </Box>
                <Box 
                    sx={{
                        display: {xs: 'none', md: 'none', lg: 'block',},
                        width: '40%', 
                        mx: 'auto', 
                        overflow: 'hidden'
                    }}>
                    <Box sx={{width: '550px', height: '550px', borderRadius: '50%', background: '#FFFF00'}}>
                        <Image style={{marginTop: '70px', marginLeft: '20px'}} src={images.Teranga} alt="Teranga livre" width='400' height='400' />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Homes;
