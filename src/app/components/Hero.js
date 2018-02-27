import React from 'react'

const Hero = props => (
    <div id="index-banner" className="parallax-container header-overlay">
        <div className="section no-pad-bot">
            <div className="container">
                <br />
                <br />
                <h1 className="header center white-text"></h1>
                <div className="row center">
                    <h3 className="header col s12 grey-text text-lighten-4">
                        Get grub right at your door in just a few clicks
                            </h3>
                </div>
                <div className="row center">
                    <div className="search-wrapper card">
                        <input id="search" />
                        <i className="material-icons">search</i>
                        <div className="search-results"></div>
                    </div>
                </div>
                <br />
                <br />

            </div>
        </div>
        <div className="parallax">
            <img src="/public/img/background1.jpg" alt="Unsplashed background img 1" />
        </div>
    </div>
)

export default Hero