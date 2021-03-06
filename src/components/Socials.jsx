/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Twitter, Linkedin, Dribbble, Github } from '@styled-icons/boxicons-logos';
import { Sun, Moon } from '@styled-icons/boxicons-regular';
import Card from '../elements/CardStyles';


export default function Socials(props) {
    

    return (
        <Card className="socials__wrapper">
            <div className="socials__card flex-col">
                <h3 className="socials__title">Follow me on my socials!</h3>
                <div className="socials__icons flex-row">
                    <div className="icons__item flex-col">
                        <a href="https://www.linkedin.com/in/hitmaizer/" target="_blank" rel="noreferrer">
                            <Linkedin size="40px" className="linkedin" />
                        </a>
                    </div>
                    <div className="icons__item flex-col">
                        <a href="https://twitter.com/josesousalves" target="_blank" rel="noreferrer">
                            <Twitter size="40px" className="twitter" />
                        </a>
                    </div>
                    <div className="icons__item flex-col">
                        <a href="https://github.com/hitmaizer" target="_blank" rel="noreferrer">
                            <Github size="40px" className="github" />
                        </a>
                    </div>
                    <div className="icons__item flex-col">
                        <a href="https://dribbble.com/hitmaizer" target="_blank" rel="noreferrer">
                            <Dribbble size="40px" className="dribbble" />
                        </a>
                    </div>
                </div>
            <div className="toggle__container">
                <div className="toggle" onClick={props.clickHandler}>
                    <div className="toggle__btn" >
                        {props.darkMode === "light" ? <Moon size="24px" className="btn__icon"  /> : <Sun size="24px" className="btn__icon" onClick={props.clickHandler} /> }
                        
                    </div>
                </div>
                    <p className="toggle__text">{props.darkMode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}</p>
            </div>
            </div>
        </Card>
    )
}