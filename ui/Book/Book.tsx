import React from 'react';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image';
import { images } from '@/images/images';

const titleStyle = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '56px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '55px',
    letterSpacing: '8px',
}
const descStyle = {
    color: '#5A20CB',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    mb: '20px',
}

const textStyle = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '36px',
}

const spanStyle = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '36px',
}

const Book = () => {
    return (
        <Box sx={{background: '#F5F5F5'}}>
            <Container>
                <Box
                    sx={{
                        width: {xs: 'auto', md: 'auto', lg: '100%'},
                        height: {xs: 'auto', md: 'auto', lg: 'auto'},
                        display: {xs: 'block', md: 'block', lg: 'flex'},
                        justifyContent: {xs: 'center', md: 'center', lg: 'space-between'},
                        alignItems: {xs: 'center', md: 'center', lg: 'center'},
                        gap: {xs: 'auto', md: 'auto', lg:'20px'},
                        py: '50px'
                    }}>
                    <Box
                        sx={{
                            width: {xs: '100%', md: '100%', lg: '60%'},
                            mx: 'auto',
                            textAlign: 'justify'
                        }}>
                        <h1 style={{...titleStyle}}>«Solutions»</h1>
                        <Typography sx={{...descStyle}}>Pour un Sénégal nouveau</Typography>
                        <Typography sx={{...textStyle}}>
                            <span style={{...spanStyle}}>Le nouveau livre d’Ousmane Sonko : plus que des «Solutions»</span> 
                            Après avoir parcouru minutieusement l’ouvrage <span style={{...spanStyle}}>«Solutions»</span> ,
                            l’on peut affirmer de prime abord et sans l’ombre d’un doute 
                            que si les Sénégalais font confiance à <span style={{...spanStyle}}>Ousmane Sonko</span>  et
                            lui accordent leur vote lors de la prochaine élection présidentielle,
                            celui-ci ne sera jamais qualifié d’un président par défaut qu’un
                            concours de circonstances favorables a permis d’accéder au pouvoir. 
                        </Typography>
                    </Box>
                    <Box 
                        sx={{
                            width: {xs: '100%', md: '100%', lg: '40%'},
                            mx: 'auto'
                        }}>
                        <Image className='customsolution' src={images.Solution} alt="Teranga livre" width='570' height='650' />
                </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Book;
