/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CardStyled from "../elements/CardStyles"
import Btn from "../elements/ButtonStyles"


export default function WorksCard(props) {
    

    return (
            <CardStyled className="card__container">
                <a href={props.demo || props.link} target="_blank" rel="noreferrer">
                    <img src={`images/works/${props.image}`} alt="" className="card__img" />
                    <div className="card__tags flex-row">
                        <p className="card__tags--item">#{props.tags[0]}</p>
                        <p className="card__tags--item">#{props.tags[1]}</p>
                        <p className="card__tags--item">#{props.tags[2]}</p>
                    </div>
                    <h1 className="card__title">{props.title}</h1>
                    <p className="card__description">{props.description}</p>
                    <div className="card__btns flex-row">
                        {props.demo && 
                        <Btn primary>
                            <a className="card__link" href={props.demo} target="_blank" rel="noreferrer">Demo</a>
                        </Btn>
                        }
                        
                        {props. code && 
                        <Btn outline>
                            <a className="card__link" href={props.code} target="_blank" rel="noreferrer">Code</a>
                        </Btn>
                        }

                        {props.link && 
                        <Btn primary>
                            <a className="card__link" href={props.link} target="_blank" rel="noreferrer">See More</a>
                        </Btn>
                        }
                        
                        
                        
                    </div>
                </a>
            </CardStyled>
        


    )
}