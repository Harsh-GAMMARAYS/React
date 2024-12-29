import { useEffect, useState } from "react";


export const useInterval = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
        setCount(count + 1);
        }, 1000);
    
        return () => clearInterval(interval);
    }, [count]);
    
    return count;
}