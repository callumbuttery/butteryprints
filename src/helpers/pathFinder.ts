import { useLocation } from "react-router-dom";

//Takes in a path - returns True/False if we are currently on that route
export function pathFinder (currentPath: string): boolean {
    const location = useLocation();
    return location.pathname.includes(currentPath);
}
