/* eslint-disable react/prop-types */
import React from 'react';
import Card from "../elements/CardStyles"

export default function Hobbies({darkMode}) {
    return (
        <Card>
            <div className="hobbies__card flex-col">
                <h3 className="hobbies__title">Hobbies</h3>
                <div className="hobbie__card flex-col">
                    {darkMode === "light" && <img src="images/gaming-light.svg" alt="" className="hobbie__img" />}
                    {darkMode === "dark" && <img src="images/gaming-dark.svg" alt="" className="hobbie__img" />}
                    <h6 className="hobbie__title">Gaming</h6>
                    <p className="hobbie__text">Certified videogamer since the 90&apos;s.</p>
                </div>
                <div className="hobbie__card flex-col">
                    {darkMode === "light" && <img src="images/sports-light.svg" alt="" className="hobbie__img" />}
                    {darkMode === "dark" && <img src="images/sports-dark.svg" alt="" className="hobbie__img" />}
                    <h6 className="hobbie__title">Sports</h6>
                    <p className="hobbie__text">Sports lover. Love watching pretty much every sport!</p>
                </div>
                <div className="hobbie__card flex-col">
                    {darkMode === "light" && <img src="images/watching-light.svg" alt="" className="hobbie__img" />}
                    {darkMode === "dark" && <img src="images/watching-dark.svg" alt="" className="hobbie__img" />}
                    <h6 className="hobbie__title">Series and Movies</h6>
                    <p className="hobbie__text">Watching series and movies is one of the best ways to rest the mind.</p>
                </div>

            </div>
        </Card>
    )
}