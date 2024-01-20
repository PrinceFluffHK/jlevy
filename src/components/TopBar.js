import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { pageList } from "../data/links.js";

const TopBar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    };
    // console.log(pageList)
    const linkList = pageList.map((page) => {
        return page.menuLink();
    });

    const NavMenu = () => {
        if (menuOpen) {
            return <div>{linkList}</div>;
        }
        return <></>;
    };

    const NavMenuIcon = () => {
        if (menuOpen) {
            return (
                <div onClick={handleMenu}>
                    <FontAwesomeIcon icon={faX} style={{}} size="2xl" />

                </div>
            )
        }
        return (
            <div onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} style={{}} size="2xl" />
            </div>
        )
    };

    return (
        <div className="">
            <Link to="/">Home</Link>
            <NavMenuIcon/>
            <NavMenu/>
        </div>
    );
};

export default TopBar;
