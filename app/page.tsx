'use client'

import Box from '@mui/material/Box'

import Homes from "@/ui/Homes/Homes"
import Offres from '@/ui/Offres/Offres'

export default function Home() {
  return (
    <Box sx={{mt: '80px'}}>
      <>
        <Homes />
        <Offres />
      </>
    
    </Box>
  )
}