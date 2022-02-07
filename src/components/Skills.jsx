import React from 'react';
import { StarOutline, Star, StarHalf } from '@styled-icons/material';
import Card from "../elements/CardStyles";

export default function Skills() {
    return (
        <Card>
            <div className="skills__card flex-col">
                <div className="skill__frontend">
                    <h3 className="skills__title">Front End</h3>
                    <div className="skills__item flex-row">
                        <p className="item__name">HTML</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                        </div>
                    </div>
                    <div className="skills__item flex-row">
                        <p className="item__name">CSS</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <StarHalf size="24px" color="#FFF175" />
                        </div>
                    </div>
                    <div className="skills__item flex-row">
                        <p className="item__name">JavaScript</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <StarHalf size="24px" color="#FFF175" />
                            <StarOutline size="24px" color="#FFF175" />
                        </div>
                    </div>
                    <div className="skills__item flex-row">
                        <p className="item__name">React</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <StarHalf size="24px" color="#FFF175" />
                            <StarOutline size="24px" color="#FFF175"/>
                        </div>
                    </div>
                    <div className="skills__item flex-row">
                        <p className="item__name">SASS</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <StarOutline size="24px" color="#FFF175" />
                        </div>
                    </div>
                </div>
                <div className="skill__design">
                    <h3 className="skills__title">Design</h3>
                    <div className="skills__item flex-row">
                        <p className="item__name">Figma</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <StarHalf size="24px" color="#FFF175" />
                        </div>
                    </div>
                    <div className="skills__item flex-row">
                        <p className="item__name">Adobe XD</p>
                        <div className="item__icon flex-row">
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <Star size="24px" color="#FFF175" />
                            <StarOutline size="24px" color="#FFF175" />
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    )
}