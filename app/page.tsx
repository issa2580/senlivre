'use client'

import Box from '@mui/material/Box'

import Homes from "@/ui/Homes/Homes"
import Offres from '@/ui/Offres/Offres'
import CTA from '@/ui/CTA/CTA'
import Book from '@/ui/Book/Book'
import Promo from '@/ui/Promo/Promo'

export default function Home() {
  return (
    <Box sx={{mt: '80px'}}>
      <>
        <Homes />
        <Offres />
        <CTA />
        <Book />
        <Promo />
      </>
    
    </Box>
  )
}