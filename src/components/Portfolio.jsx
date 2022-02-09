/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../elements/CardStyles'

export default function Portfolio({ darkMode }) {
    return (
        <div className="portfolio__card">
            <Card>
                <h5 className="portfolio__category">Blog</h5>
                <div className="portfolio__midsection flex-col">
                    <h3 className="portfolio__title">A bit more info about this page!</h3>
                    {darkMode === "light" && <img src="images/dev-light.svg" alt="" className="portfolio__img" />}
                    {darkMode === "dark" && <img src="images/dev-dark.svg" alt="" className="portfolio__img" />}  
                <p className="portfolio__text">This page was originally thought as part of <b>devChallenges.io</b>&apos;s 
                last <b>&quot;Responsive Web Design&quot;</b> path challenge, which requires participants to develop a portfolio.<br />
                <br />
                This one was made with <b>React</b>, and the styling was done with <b>Styled Components</b> and <b>SCSS</b>. 
                This way I was able to showcase all my skills as a Front End Developer.</p>
                </div>
            </Card>
        </div>
    )
}