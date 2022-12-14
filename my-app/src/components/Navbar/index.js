import React from 'react';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>

                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>

                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>

                    <NavLink to="/sign-up" activeStyle>
                        Sign up
                    </NavLink>
                </NavMenu>
        
            </Nav>
        </>
    )
}

export default Navbar