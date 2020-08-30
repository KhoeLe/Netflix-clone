import React,{useEffect,useState} from 'react'
import "./Styles/Nav.css"
function Navbar() {
    const [roi, xuly] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                xuly(true)
            } else xuly(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    }, [])                           
    return (
        <div className={`nav ${roi && "nav__black"}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" 
        alt="Netlfix Logo" className="nav__logo"/>

        <img src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABequx-MvIejXXMUQrRY6Wb_V4KvsRCZF4BZwbEZonU0bxy6hqMsUjntlXVaAOuMPGQu6HVojxyj5p4qTHHPfSP0.png?r=fcc" 
        alt="Netlfix Avatar"
        className="nav__avatar"/>
            
        </div>
    )
}

export default Navbar
