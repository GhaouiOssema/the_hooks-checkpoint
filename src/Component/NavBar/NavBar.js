import React from 'react'
import "./NavBar.css"

import { Button } from 'react-bootstrap'



const NavBar = ({setShow}) => {

    const show = () => {
        setShow(true)
    }

    return (
        <div>
            <div className="header">
                <img src="https://cdn.wamda.com/company_logo/3b5e885a422af5c.png" alt="Go My Code"/>
                <h1 className="header-welcome" >Movie App</h1>
                <div className="header-search">
                    <Button variant="dark" style={{marginRight : 20}} onClick={show} >Add New Movie</Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
