import React, { useState } from "react"
import "./MethodNavbar.css"


const MethodNavbar = ({ setCurMethod, routes }) => {
    const [methods, setMethods] = useState([routes[0]]);

    const handleClick = (e) => {
        setCurMethod(e.target.innerText);
    }

    return (
        <>
            <div className="in-route-nav">
                <ul className="iroute-nav-list scale-in-hor-left"
                    onAnimationEndCapture={() => {
                        setMethods(routes)
                    }}>
                    {methods.map((item) => {

                        return (
                            <div key={item} >
                                <li className="list-item fade-in-image" onClick={handleClick} key={item}>{item}
                                </li>
                            </div>
                        )
                    })
                    }

                </ul>

            </div>
        </>

    )
}

export default MethodNavbar;