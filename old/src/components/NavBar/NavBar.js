import React from "react";
import './NavBar.css'
import { useNavigate } from 'react-router-dom';

const routes = [{ label: "HOME PAGE", path: "/" }, { label: "POLYNOMIAL ROOT", path: "polynomialroot" }, { label: "LINEAR ALGEBRIC", path: "linearalgebric" }]

const Navbar = () => {
    const navigate = useNavigate(routes[0].path);
    const handleOnClick = (item) => navigate(item.path);
    return (
        <nav className="">
            <div className='nav-bar'>
                <ul className='nav-list'>
                    {
                        routes.map((item) => {
                            return <li key={item.label}
                                onClick={() => { handleOnClick(item) }}
                            >{item.label}
                            </li>

                        })
                    }

                </ul>
            </div>
        </nav>
    )
}
export default Navbar