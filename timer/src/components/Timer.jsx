import React, { useEffect, useState } from 'react'

export const Timer = () => {

    const [segundos, setSegundos] = useState(0)

    useEffect(() => { 
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>Timer: {segundos} segundos</div>
    )
}