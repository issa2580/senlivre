import { useEffect, useState } from 'react'

const UseWindowSize = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    // Set size at the first client-side load
    handleResize()

    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenWidth
}

export default UseWindowSize