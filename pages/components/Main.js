import React from 'react';

const Main = () => {
    return ( 
        <section className="container">
            <div className="home__container">
                <div className="home__head">
                    <h1 className="home__h1">Best Places to find design inspiration</h1>
                    <div className="home__episode">
                        <div className="home__episode-circle"></div>
                        <div className="home__epi">
                            <strong className="epi">Episode 1</strong>
                            <div className="home__epi-cat">
                                <p className="cat">Category • 0:13</p>
                            </div>
                        </div>
                    </div>

                    <div className="home__epi-text">
                        <p className="tex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.<br/><br/>Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <strong className="home__epi-page">Episode page <img src="./assets/img/Frame.png" alt="" className="ico" /></strong>
                   
                </div>
            
                <div className="home__epi-img">
                    <div className="new-epi">New episode</div>
                    <img src="./assets/img/h1-podcastimg2.jpg.png" alt="" className="new__epi-img" />
                </div>
            </div>    
        </section>

     );
};
 
export default Main;
