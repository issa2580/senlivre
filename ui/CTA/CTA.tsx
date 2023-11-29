import React from 'react';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Image from 'next/image';
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
                        sx={{
                            width: {xs: '200px', md: '400px', lg: '400px'},
                            height: {xs: '200px', md: '400px', lg: '400px'},
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
                            src={images.Noir1} alt="Teranga livre" width='400' height='400' />
                    </Box>
                </Box>
                <Box>
                    <Box 
                        sx={{
                            width: {xs: '200px', md: '400px', lg: '400px'},
                            height: {xs: '200px', md: '400px', lg: '400px'},
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
                            src={images.Noir2} alt="Teranga livre" width='400' height='400' />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CTA;
