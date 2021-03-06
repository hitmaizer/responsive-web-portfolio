/* eslint-disable react/prop-types */
import React from 'react';
import { Mail, Phone } from '@styled-icons/material';
import Card from "../elements/CardStyles";

export default function Intro({ darkMode }) {
    
    return (
        <Card>
            <div className="intro__card flex-row">
                {darkMode === "light" && <img className="card__avatar" src="images/avatar-light.svg" alt="" />}
                {darkMode === "dark" && <img className="card__avatar" src="images/avatar-dark.svg" alt="" />}
                
                <div className="card__info flex-col">
                    <div className="info__details flex-row">
                        <div className="details">
                            <h3 className="details__name">José Alves</h3>
                            <p className="details__position">Front End Developer</p>
                        </div>
                        <div className="details__contacts">
                            <div className="contacts__item flex-row">
                                <Mail size="24px" className="intro__icon" />
                                <p className="mail">jose.sousalves@gmail.com</p>
                            </div>
                            <div className="contacts__item flex-row">
                                <Phone size="24px" className="intro__icon" />
                                <p className="mail">(+351) 91 102 340 5</p>
                            </div>
                        </div>
                    </div>
                    <p className="intro__bio">Self-taught developer, who is willing to learn and
                    create outstanding UI.<br />
                    On this page you will be able to get to know some of my work a bit better.
                    </p>

                </div>
            </div>
        </Card>
    )
}
