import React, { useEffect, useState } from 'react'

export default function useWindowSize() {
  
    const[windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: innerWidth,
                height: innerHeight
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return {windowSize}
}
