import React from 'react';
import Card from "../elements/CardStyles"
import Btn from "../elements/ButtonStyles"

export default function Filter(props) {


    return (
        <Card>
            <div className="filter__card flex-col">
                <h3 className="filter__title">Filter projects by category</h3>
                <div className="filter__btns flex-row">
                    <Btn filter>Responsive</Btn> 
                    <Btn filter>React</Btn>
                    <Btn filter>UI Design</Btn>
                    <Btn filter>Other</Btn>
                </div>
            </div>
        </Card>
    )
}