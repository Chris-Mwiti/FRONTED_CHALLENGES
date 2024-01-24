import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [dimensions,setDimensions] = useState({
        width: window.innerWidth,
        height:window.innerHeight
    })

    const handleWindowChange = () => setDimensions({
        width: window.innerWidth,
        height:window.innerHeight
    })

    useEffect(() => {
        window.addEventListener('resize', handleWindowChange);

        return () => window.removeEventListener('resize', handleWindowChange);
    })

    return dimensions
}


export default useWindowSize;