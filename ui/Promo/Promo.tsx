import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import { images } from '@/images/images';


const livreStyles = {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
}

const textStyles = {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal'
}

const spanStyles = {
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal'
}

const promoStyles = {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '64px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal'
}

const dateStyles = {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal'
}

const reducetyles = {
    color: '#5A20CB',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '350px', 
    height: '60px', 
    flexShrink: 0, 
    background: '#FFFFFF'
}

const Promo = () => {
    return (
        <Box 
            sx={{
                flexGrow: 1, 
                pt: '100px', 
                pb: '100px',
                textAlign: 'center',
            }}>
            <Grid 
                container
                spacing= {{xs: 2, md: 3, lg: 5}}
                columns= {{xs: 1, md: 1, lg: 3}}>
                <Grid
                    sx={{background: '#5A20CB'}}
                    item xs={1} md={1} lg={1}>
                    <Box sx={{position: 'relative'}}>
                        <Image className='customsolution' src={images.Teranga} alt="Teranga livre" width='400' height='430' />
                    </Box>
                </Grid>
                <Grid
                    color='white'
                    sx={{
                        gap: '30px',
                        background: '#5A20CB', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        textAlign: 'center'
                    }}
                    item xs={1} md={1} lg={1}>
                    <Typography sx={{...promoStyles}}>SPECIAL PROMO</Typography>
                    <Typography sx={{...dateStyles}}>à partir 01 Juillet  2023</Typography>
                    <Typography sx={{...reducetyles}}>Jusqu’à -40%</Typography>
                    <Typography sx={{...textStyles}}>
                        Si vous voulez construire et apporter
                        des <span style={{...spanStyles}}>solutions</span>  pour un Sénégal nouveau
                        Rendez-vous sur
                    </Typography>
                    <Box 
                        sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'
                        }}>
                        <Box>
                            <Image src={images.Group} alt="Teranga livre" width='60' height='50' />
                        </Box>
                        <Typography sx={{...livreStyles}}>Sen Livre</Typography>
                    </Box>
                    
                </Grid>
                <Grid
                    sx={{background: '#5A20CB'}}
                    item xs={1} md={1} lg={1}>
                    <Box sx={{position: 'relative', top: '-10px'}}>
                        <Image className='customsolution' src={images.Solution} alt="Teranga livre" width='445' height='500' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Promo;
