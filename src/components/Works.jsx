import React from 'react';
import WorksCard from "./WorksCard";


export default function Works(props) {
    return (
        
            <div className="works__card flex-row">
                <WorksCard />
                <WorksCard />
                <WorksCard />
            </div>
    
    )
}