/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Twitter, Linkedin, Dribbble, Github } from '@styled-icons/boxicons-logos';
import { Sun } from '@styled-icons/boxicons-regular/Sun';
import PropTypes from 'prop-types';
import Card from '../elements/CardStyles';


export default function Socials(props) {
    
    Socials.defaultProps = {
        clickHandler: PropTypes.func
    }

    return (
        <Card>
            <div className="socials__card">
                <h3 className="socials__title">Follow me on my socials!</h3>
                <div className="socials__icons flex-row">
                    <div className="icons__item flex-col">
                        <a href="https://www.linkedin.com/in/hitmaizer/">
                            <Linkedin size="40px" className="linkedin" />
                        </a>
                    </div>
                    <div className="icons__item flex-col">
                        <a href="https://twitter.com/josesousalves">
                            <Twitter size="40px" className="twitter" />
                        </a>
                    </div>
                    <div className="icons__item flex-col">
                        <a href="https://github.com/hitmaizer">
                            <Github size="40px" className="github" />
                        </a>
                    </div>
                    <div className="icons__item flex-col">
                        <a href="https://dribbble.com/hitmaizer">
                            <Dribbble size="40px" className="dribbble" />
                        </a>
                    </div>
                </div>
            <div className="toggle__container">
                <div className="toggle">
                    <div className="toggle__btn" >
                        <Sun size="24px" className="btn__icon" onClick={props.clickHandler} />
                    </div>
                </div>
                    <p className="toggle__text">Light</p>
            </div>
            </div>
        </Card>
    )
}