import {MoonIcon, SunIcon} from "@heroicons/react/20/solid";
import {useState} from "react";

export default function Itoggle() {

    const [darkMode, setDarkMode] = useState(false);

    const buttonIconStyles = "bg-non disabled:invisible";
    const iconStyles = `h-6 w-6 text-dark-gray`;
    const toggleStyles = "flex justify-between bg-primary-green h-8 w-15 py-1 px-2.5 rounded-full";


    function handleClick() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={toggleStyles}>
            <button className={buttonIconStyles} onClick={handleClick} disabled={!darkMode}><SunIcon className={iconStyles} /></button>
            <button className={buttonIconStyles} onClick={handleClick} disabled={darkMode}><MoonIcon className={iconStyles}/></button>
        </div>
    );
}