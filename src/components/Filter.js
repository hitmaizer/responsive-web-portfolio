import React from 'react';
import Card from "../elements/CardStyles"
import Btn from "../elements/ButtonStyles"

export default function Filter(props) {




    return (
        <Card>
            <div className="filter__card flex-col">
                <h3 className="filter__title">Filter projects by category</h3>
                <div className="filter__btns flex-row">
                    <Btn primary>Responsive</Btn> 
                    <Btn outline>React</Btn>
                    <Btn outline>UI</Btn>
                    <Btn outline>Other</Btn>
                </div>
            </div>
        </Card>
    )
}