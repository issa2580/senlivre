import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import { images } from '@/images/images';
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const livreStyles = {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
}

const newStyles = {
    fontFamily: 'Inter',
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '60px'
}

const logStyles = {
    fontFamily: 'Inter',
    fontSize: '27px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal'
}

const inputStyle = {
    width: '100%',
    flexShrink: 0,
    borderRadius: '12px',
    background: '#FFFFFF',
    mb: '50px',
    mt: '10px'
}

const Newsletter = () => {
    return (
        <Box>
            <Box sx={{flexGrow: 1, textAlign: 'center', background: '#5A20CB'}}>
                <Container>
                    <Grid
                        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        color= 'white'
                        container
                        spacing= {{xs: 2, md: 3, lg: 5}}
                        columns= {{xs: 1, md: 1, lg: 2}}>
                        <Grid item xs={1} md={1} lg={1}>
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
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                textAlign: 'center'
                            }}
                            item xs={1} md={1} lg={1}>
                            <Typography sx={{...newStyles}}>Nouveau sur Sen Livre ?</Typography>
                            <Typography sx={{...logStyles}}>
                                Inscrivez-vous à nos communications
                                pour recevoir nos meilleurs offres!
                            </Typography>
                            <TextField
                                id='newsletter'
                                variant='outlined'
                                placeholder='example@gmail.com'
                                sx={{...inputStyle}}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}>
                                
                            </TextField>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Newsletter;
