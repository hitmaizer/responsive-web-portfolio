import React from 'react';
import Card from "../elements/CardStyles"

export default function Certificates() {
    return (
        <Card>
            <div className="certificates__card flex-col">
                <h3 className="certificates__title">Certificates</h3>
                <div className="certificate__item flex-row">
                    <img src="images/isceDouro.png" alt="" className="certificate__img" />
                    <div className="certificate__info flex-col">
                        <p className="certificate__date">Sep 2019 - Jun 2022</p>
                        <p className="certificate__title">Interactive Multimedia Content Creation</p>
                        <p className="certificate__description">University degree on creation of 
                        Interactive Multimedia content</p>
                    </div>
                </div>
                <div className="certificate__item flex-row">
                    <img src="images/freeCode.png" alt="" className="certificate__img" />
                    <div className="certificate__info flex-col">
                        <p className="certificate__date">Feb 2021</p>
                        <p className="certificate__title">Responsive Web Design</p>
                        <p className="certificate__description">Developer Certification from FreeCodeCamp, 
                        representing approximately 300 hours of coursework.</p>
                    </div>
                </div>
                <div className="certificate__item flex-row">
                    <img src="images/devchallenges.jpg" alt="" className="certificate__img" />
                    <div className="certificate__info flex-col">
                        <p className="certificate__date">Feb 2022</p>
                        <p className="certificate__title">Responsive Web Developer</p>
                        <p className="certificate__description">8 real-life like pratical challenges by devChallenges.io</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}