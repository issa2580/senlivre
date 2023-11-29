import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel'
import { CarouselContext } from 'pure-react-carousel'
import styled from 'styled-components'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import 'pure-react-carousel/dist/react-carousel.es.css'
import { UseWindowSize } from '@/hooks/UseWindowSize'

interface CarouselProps {
  setSlideCount: (count: number) => void
  setCurrentSlide: (count: number) => void
  children: React.ReactNode
}

const CarouselSlider = ({
  setSlideCount,
  setCurrentSlide,
  children,
}: CarouselProps) => {
  const screenWidth = UseWindowSize()

  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext)

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible: number) => {
      const { currentSlide, totalSlides, visibleSlides } = carouselContext?.state

      setSlideCount(slideToBeVisible)

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible)
      }
    }

    if (screenWidth < 832) {
      updateCarouselSlide(1)
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2)
    }
    //>= 1088
    else {
      updateCarouselSlide(3)
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext])

  return (
    <Wrapper>
      <CarouselWrapper className="carousel-container">
        <Slider>{children}</Slider>
      </CarouselWrapper>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <ArrowForwardIosIcon
            sx={{ fontSize: '20px', display: 'inline', color: '#5A20CB' }}
          />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <ArrowForwardIosIcon
            sx={{ fontSize: '20px', display: 'inline', color: '#5A20CB' }}
          />
        </ButtonNext>
      </div>
    </Wrapper>
  )
}

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (max-width: 832px) {
      max-width: 704px;
      background-color: 'red';
    }

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }
  .carousel__slider-tray {
    width: 150%;
  }

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }
    .btn-arrow:hover {
    //   background-color: rgba(185, 80, 3, 0.1);
      border-radius: 50%;
      color: white;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #ffffff;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 12px;
        height: 8px;
        border-radius: 10px;
        background-color: #5A20CB;
        transition: background 0.4s ease;
      }
    }
  }
`

export default CarouselSlider