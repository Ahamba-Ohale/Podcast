import React from "react";


const Timmy = () => {
    return ( 
            <section className="container">
                <div className="timmy__container">
                    <img src="/assets/img/h4-newimg3-650x650.jpg.png"  className="timmy__img"/>
                    <div className="timmy__sub-container">
                        <div className="timmy__content">
                            <h1 className="timmy__mike">Timmy Mike: the nature of design</h1>
                            <p className="timmy__epi">Episode page <img src="/assets/img/Frame.png" alt="" className="tim"/></p>
                        </div>
                
                
                        <div className="timmy__body">
                            <div className="timmy__body-epi">
                                <div className="body-epi1">Episode 1 •</div>
                            </div>
                            <div className="timmy__body2">
                                <div className="body-mic">Microphone •</div>
                            </div>
                            <div className="time">0:13</div>
                        </div>
                        <div className="timmy__body3">
                            <div className="timmy__empty"></div>
                            <div className="timmy__10s">
                                <div className="secs">10s</div>
                            </div>

                            <div className="timmy__10s">
                                <div className="secs">10s</div>
                            </div>
                            <div>
                                <input type="range" name="range" id="ranges"/>
                            </div>
                            
                            <div className="timmy__body7">
                                <div className="secc">00:00 / 00:00</div>
                            </div>
                            <div className="timmy__body8">
                                <img src="/assets/img/Frame (1).png" alt="" className="speak" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}


        
export default Timmy;
