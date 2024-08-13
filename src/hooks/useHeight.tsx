import { useEffect, useState } from 'react'
import { isIOS } from "react-device-detect"
// Hoook to get the height size of the screen, will return a number
// the height should not be less than 400px

function useHeight(): number {
    const [height, setHeight] = useState(400);

    const getHeight = () => {
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const calculatedHeight = Math.max(clientHeight, 400);
        return isIOS ? calculatedHeight + 16 : calculatedHeight;
    };

    useEffect(() => {
        const handleResize = () => {
            const newHeight = getHeight();
            setHeight(newHeight);
        };
      
        handleResize(); // Initialize with the initial height
    }, []);
  
    return height;
}

export default useHeight