/*
    Replacement for import { ScrollRestoration } from "react-router-dom" as it refuses to work
    solution taken from https://www.youtube.com/watch?v=IPESg2qXl8w 
*/

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () =>{
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return(
        <div></div>
    )
}