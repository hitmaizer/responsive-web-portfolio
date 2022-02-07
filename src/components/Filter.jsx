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
                    <Btn filterBtn onClick={() => props.stateChanger(1)}>Responsive</Btn> 
                    <Btn filterBtn onClick={() => props.stateChanger(2)}>React</Btn>
                    <Btn filterBtn onClick={() => props.stateChanger(3)}>UI Design</Btn>
                    <Btn filterBtn onClick={() => props.stateChanger(4)}>Other</Btn>
                </div>
            </div>
        </Card>
    )
}