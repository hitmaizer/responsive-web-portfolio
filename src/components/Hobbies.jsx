import React from 'react';
import Card from "../elements/CardStyles"

export default function Hobbies() {
    return (
        <Card>
            <div className="hobbies__card flex-col">
                <h3 className="hobbies__title">Hobbies</h3>
                <div className="hobbie__card">
                    <img src="images/retro.jpg" alt="" className="hobbie__img" />
                    <h6 className="hobbie__title">Gaming</h6>
                    <p className="hobbie__text">Certified videogamer since the 90&apos;s.</p>
                </div>
                <div className="hobbie__card">
                    <img src="images/sports.jpg" alt="" className="hobbie__img" />
                    <h6 className="hobbie__title">Sports</h6>
                    <p className="hobbie__text">Sports lover. Love watching pretty much every sport!</p>
                </div>
                <div className="hobbie__card">
                    <img src="images/watching.jpg" alt="" className="hobbie__img" />
                    <h6 className="hobbie__title">Series and Movies</h6>
                    <p className="hobbie__text">Watching series and movies is one of the best ways to rest the mind.</p>
                </div>

            </div>
        </Card>
    )
}