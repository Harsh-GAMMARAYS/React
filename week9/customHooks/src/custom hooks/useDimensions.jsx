import { useEffect, useState } from "react"

export const useDimensions = () => {
    const [dimension, useDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

useEffect(() => {
    const handleResize =() => {
        useDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

return dimension;

};