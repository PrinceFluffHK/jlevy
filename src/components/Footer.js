import React from 'react';
import logoText from "../images/Jlevy Banner Text.png"

const Footer = (props) => {
    return (
        <div className='footer-container center' style={{ flexDirection: "column"}}>
            <img className='footer-banner' src={logoText} alt='Stylized logo of "Jacob Levy"'/>
            <footer><small>Copyright © 2024 Jacob Levy. All rights reserved.</small></footer>
        </div>
    )
}

export default Footer