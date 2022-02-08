/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Card from "../elements/CardStyles"
import Btn from "../elements/ButtonStyles"

export default function Filter(props) {


    return (
        <Card>
            <div className="filter__card flex-col">
                <h3 className="filter__title">Filter projects by category</h3>
                <div className="filter__btns flex-row">
                    <Btn filterBtn className ="filter" id="responsive" onClick={() => props.stateChanger(1, "responsive")}>Responsive</Btn> 
                    <Btn filterBtn className ="filter" id="react" onClick={() => props.stateChanger(2, "react")}>React</Btn>
                    <Btn filterBtn className ="filter" id="ui" onClick={() => props.stateChanger(3, "ui")}>UI Design</Btn>
                    <Btn filterBtn className ="filter" id="other" onClick={() => props.stateChanger(4, "other")}>Other</Btn>
                </div>
            </div>
        </Card>
    )
}