import React, {useEffect, useState} from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export interface HeaderProps {
    title: string
    children: any;
    logoSVG: any;
}


export const Header: React.FC<HeaderProps> = ({title, logoSVG, children}) => {
    const [sideNav, setSideNav] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setSideNav(document.getElementById('basic-mobile-side-bar'));
        return () => {
            setSideNav(null)
        }
    }, [])

    const openMobileMenu = () => {
        if (sideNav) {
            sideNav.style.width = "100%"
        }
    }
    const closeMobileMenu = () => {
        if (sideNav) {
            sideNav.style.width = "0"
        }
    }
    return (
        <React.Fragment>
            <header>
                <div className="wrapper">
                    <div>
                        {logoSVG}
                        <h1>{title}</h1>
                    </div>
                    <div className="menu-icon">
                        <MenuIcon onClick={openMobileMenu}/>
                    </div>

                    <div className="header-children">
                        {children}
                    </div>

                </div>
            </header>
            <div id="basic-mobile-side-bar" className='side-nav'>
                <header>
                    <div className="wrapper">
                        <div></div>
                        <CloseIcon className="close-icon" onClick={closeMobileMenu}> </CloseIcon>
                    </div>
                </header>
                <div className="side-nav-children">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
};
