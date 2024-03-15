import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { pageList } from "../data/links.js";
import bannerText from "../images/Jlevy Banner Text.webp";

const TopBar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const NavMenuIcon = () => {
        if (menuOpen) {
            return (
                <div onClick={handleMenu} className="menu-icon">
                    <FontAwesomeIcon
                        icon={faX}
                        style={{ color: "black" }}
                        size="2xl"
                    />
                </div>
            );
        }
        return (
            <div onClick={handleMenu} className="menu-icon">
                <FontAwesomeIcon
                    icon={faBars}
                    style={{ color: "black" }}
                    size="2xl"
                />
            </div>
        );
    };

    const linkList = pageList.map((page) => {
        return (
            <div
                style={{ marginRight: "1rem" }}
                onClick={closeMenu}
                key={page.name}
            >
                {page.menuLink()}
            </div>
        );
    });

    const NavMenu = () => {
        if (menuOpen) {
            return (
                <div className="links-container center">
                    <div className="width-90">{linkList}</div>
                </div>
            );
        }
        return <></>;
    };

    return (
        <div>
            <div className="navbar justify-between align-center">
                <div>
                    <Link to="/" className="" onClick={closeMenu}>
                        <img
                            className="banner-text"
                            src={bannerText}
                            alt="Logo with the text 'Jacob Levy'"
                        />
                    </Link>
                </div>
                <div className="invis-sm">
                    <div className="top-bar-right ">{linkList}</div>
                </div>
                <div className="vis-sm">
                    <NavMenuIcon />
                </div>
            </div>
            <NavMenu />
        </div>
    );
};

export default TopBar;
