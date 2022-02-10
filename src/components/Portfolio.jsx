/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../elements/CardStyles'

export default function Portfolio({ darkMode }) {
    return (
        <div className="portfolio__card">
            <Card>
                <h5 className="portfolio__category">Portfolio Page</h5>
                <div className="portfolio__midsection flex-col">
                    <h3 className="portfolio__title">A bit more info about this page!</h3>
                    {darkMode === "light" && <img src="images/dev-light.svg" alt="" className="portfolio__img" />}
                    {darkMode === "dark" && <img src="images/dev-dark.svg" alt="" className="portfolio__img" />}  
                <p className="portfolio__text">This page was originally thought as part of <span className="important__word"><b>devChallenges.io&apos;s</b></span> last <span className="important__word"><b>&quot;Responsive Web Developer&quot;</b></span> path challenge, which requires participants to develop a portfolio.<br />
                <br />
                This one was made with <span className="important__word"><b>React</b></span>, and the styling was done with <span className="important__word"><b>Styled Components</b></span> and <span className="important__word"><b>SCSS</b></span>. 
                This way I was able to showcase all my skills as a <span className="important__word"><b>Front End Developer.</b></span></p>
                </div>
            </Card>
        </div>
    )
}