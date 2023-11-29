import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { CarouselProvider, Slide } from 'pure-react-carousel';
import { CarouselSlider } from '../CarouselSlider';

import { books } from '@/constants/books/books';
import Image from 'next/image';
import { Card, CardActionArea, CardActions, CardContent } from '@mui/material';
import Link from 'next/link';

const offerStyles = {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: '40px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
}

  const cardStyle = {
    boxShadow: '0 2px 5px 0 rgba(185, 80, 3, 0.1)',
    borderRadius: '5px',
    '@media (maxWidth: 768px)': {
      width: '85%',
    },
  } as const

  const cardImgStyle = {
    width: '100%',
    objectFit: 'fill',
    alignItems: 'center',
  } as const

  const titlecardStyle = {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '10px',
    color: '#000000',
  } as const

const Offres = () => {


    const [slideCount, setSlideCount] = useState(2)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)
  
    useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        setWindowWidth(newWidth);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <Box 
            sx={{
                mt: {xs: '50px', md: '50px', lg: 0}
            }}>
            <Box
                sx={{
                    width: {xs: 'auto', md: 'auto', lg: '100%'},
                    height: {xs: '60px', md: '70px', lg: '80px'},
                    display: {xs: 'flex', md: 'flex', lg: 'flex'},
                    justifyContent: {xs: 'center', md: 'center', lg: 'center'},
                    alignItems: {xs: 'center', md: 'center', lg: 'center'},
                    background: '#5A20CB'
                }}>
                <Typography 
                    className='customoffer'
                    sx={{...offerStyles}}>
                    Les offres à ne pas rater
                </Typography>
            </Box>
            <Box sx={{py: '100px', background: '#ddd'}}>
                <Container>
                    <Box 
                        sx={{
                            p: '50px 50px', 
                            background: '#f5f5f5',
                            boxShadow: '0px 3px 9px 0px rgba(0, 0, 0, 0.25)',
                        }}>
                        <CarouselProvider
                                visibleSlides={windowWidth < 600 ? 1 : windowWidth < 960 ? 2 : windowWidth < 1280 ? 3 : 3}
                                totalSlides={books?.length || 0}
                                step={1}
                                currentSlide={currentSlide}
                                naturalSlideWidth={100}
                                naturalSlideHeight={125}
                                hasMasterSpinner={true}
                                isIntrinsicHeight={true}>
                                <CarouselSlider
                                    setSlideCount={setSlideCount}
                                    setCurrentSlide={setCurrentSlide}>
                                    {books?.map((book, index) => (
                                    <Slide key={index} index={index}>
                                        <React.Fragment>
                                            <Card sx={{ ...cardStyle }}>
                                                <Link
                                                    href=''
                                                    style={{ textDecoration: 'none' }}>
                                                    <CardActionArea>
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <Image
                                                            src={book.thumbnail}
                                                            alt={book.title}
                                                            style={{ ...cardImgStyle }}
                                                        />
                                                        <CardContent>
                                                            <Typography sx={{ ...titlecardStyle }} gutterBottom variant="h5">
                                                                {book.title}
                                                            </Typography>
                                                            <Typography sx={{ ...titlecardStyle }} gutterBottom variant="h5">
                                                                {book.author}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Link>
                                                <CardActions
                                                    sx={{
                                                        marginTop: '12px',
                                                        justifyContent: 'flex-end',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                    }}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ lineHeight: '1.2', fontSize: '18px', fontWeight: '600' }}
                                                    >
                                                        {book.price} <span>FCFA</span>
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                        color: '#4e6579',
                                                        textDecoration: 'line-through',
                                                        margin: '0 4px 0 0',
                                                        }}
                                                    >
                                                        {book.price} <span>FCFA</span>
                                                    </Typography>
                                                </CardActions>
                                            </Card>
                                        </React.Fragment>
                                    </Slide>
                                    ))}
                                </CarouselSlider>
                            </CarouselProvider>
                    </Box>
                </Container>
            </Box>
            

        </Box>

    );
}

export default Offres;
