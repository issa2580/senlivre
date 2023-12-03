import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


import { images } from '@/images/images';

const livreStyle = {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: '56px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    padding: '50px 0'
}as const

const btnStyles = {
    display: 'inline-flex',
    height: '52px',
    padding: '13px 42px',
    alignItems: 'flex-start',
    gap: '10px',
    flexSharink: 0,
    borderRadius: '5px',
    background: '#FFFFFF',
    color: '#5A20CB',
    boxShadow: '0px 3px 9px 0px rgba(246, 248, 255, 0.25)',
    '&:hover': {
        background: '#5A20CB',
        color: 'white'
    }
}

const CTA = () => {
    return (
        <Box sx={{background: '#5A20CB'}}>
            <Typography className='customlivre' sx={{...livreStyle}}>Livres Classiques africains</Typography>
            <Box 
                sx={{
                    py: '80px',
                    display: {xs: 'flex', md: 'flex', lg: 'flex'},
                    flexDirection: {xs: 'column', md: 'row', lg: 'row'},
                    gap: {xs: '120px', md: '150px', lg: 0},
                    justifyContent: {xs: 'space-around', md: 'space-around', lg: 'space-around'},
                    alignItems: {xs: 'center', md: 'center', lg: 'center'},
                }}>
                <Box>
                    <Box 
                        className= 'customeimage'
                        sx={{
                            width: {xs: '200px', md: '400px', lg: '270px'},
                            height: {xs: '200px', md: '400px', lg: '270px'},
                            transform: 'rotate(60deg)',
                            flexShrink: 0,
                            borderRadius: '12px',
                            border: '2px solid #FFF',
                            background: '#FFF',
                            position: 'relative',
                        }}>
                        <Image 
                            className='customeimage'
                            style={{position: 'absolute', transform: 'rotate(-60deg)'}} 
                            src={images.Noir1} alt="Teranga livre" width='270' height='270' />
                    </Box>
                </Box>
                <Box>
                    <Button sx={{...btnStyles}}>
                        <Typography>Decouvrir</Typography>
                    </Button>
                </Box>
                <Box>
                    <Box 
                        className= 'customeimage'
                        sx={{
                            width: {xs: '200px', md: '400px', lg: '270px'},
                            height: {xs: '200px', md: '400px', lg: '270px'},
                            transform: 'rotate(61.5deg)',
                            flexShrink: 0,
                            borderRadius: '12px',
                            border: '2px solid #FFF',
                            background: '#FFF',
                            position: 'relative',
                        }}>
                        <Image 
                            className='customeimage'
                            style={{position: 'absolute', transform: 'rotate(-60deg)'}} 
                            src={images.Noir2} alt="Teranga livre" width='270' height='270' />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CTA;
