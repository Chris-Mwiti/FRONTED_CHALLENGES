import {useState, useEffect} from 'react'

const useWindowSize = () => {
    const [windowProperty, setWindowProperty] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleWindowResize = () => {
        setWindowProperty({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    },[])

    return windowProperty
}

export default useWindowSize

