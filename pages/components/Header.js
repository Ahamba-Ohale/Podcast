import React from 'react';

const Header = () => {
    return ( 
        <>
        <header className="container">
        <nav className="nav">

            <div className="nav__menu">
                        <a href="#" className="nav__logo">
                    <span className="nav__logo-name"><img src="/assets/img/logonew1.png.png" alt="" /></span>
                </a>    
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#pages" className="nav__link">Pages</a>
                    </li>

                    <li className="nav__item">
                        <a href="#podcast" className="nav__link">Podcast</a>
                    </li>

                    <li className="nav__item">
                        <a href="#blog" className="nav__link">Blog</a>
                    </li>

                    <li className="nav__item">
                        <a href="#shop" className="nav__link">Shop</a>
                    </li>
                </ul>

                <div className="nav__buttons">
                    <p className="search__nav"><img src="/assets/img/Frames.png" id="search-nav" />Search</p>
                
                    <div className="nav__toggle" id="nav-toggle">
                        <img src="/assets/img/menu-line.png" alt="" className="nav__toggle-button" />
                    </div>
                </div>
            </div>


            <div className="nav__body">
                <span className="nav__h1">
                    <h1>New Episode Available Now</h1>
                </span>
                <p>Available on Apple Soundcast and Spotify.</p>
                <div className='nav-im'>
                <img src="./assets/img/h1-rev-img1.png.png" alt="" id="img" />
                <img src="./assets/img/h1-rev-img2.png.png" alt="" id="img" />
                </div>
            </div>
        </nav>
    </header>
    </>
     );
};
 
export default Header;