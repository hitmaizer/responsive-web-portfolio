import React from 'react';
import CardStyled from "../elements/CardStyles"
import Btn from "../elements/ButtonStyles"


export default function WorksCard(props) {


    return (
        <div className="works__card">
            <CardStyled >
                <img src="images/recipe-page.png" alt="" className="card__img" />
                <div className="card__tags flex-row">
                    <p className="card__tags--item">#HTML</p>
                    <p className="card__tags--item">#CSS</p>
                    <p className="card__tags--item">#responsive</p>
                </div>
                <h1 className="card__title">Recipe Blog</h1>
                <p className="card__description">In this project, 
                I work with HTML and CSS to create a responsive page. 
                This page is similiar with a page. The design is from devchallenge.io</p>
                <div className="card__btns flex-row">
                    <Btn primary>
                        <a className="card__link" href="https://edie-homepage-hitmaizer.vercel.app/" target="_blank" rel="noreferrer">Demo</a>
                    </Btn>
                    <Btn outline>
                        <a className="card__link" href="https://edie-homepage-hitmaizer.vercel.app/" target="_blank" rel="noreferrer">Code</a>
                    </Btn>
                    
                </div>
            </CardStyled>
        </div>


    )
}