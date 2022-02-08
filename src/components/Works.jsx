/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WorksCard from "./WorksCard";
import Data from "../data"


export default function Works(props) {

   const [worksData, setWorksData] = React.useState([])
   const currentState = props.state
    
   React.useEffect(() => {
        const worksArray = Data.works
        setWorksData(worksArray)
    }, [])

    const worksElements = worksData.map(work => (
    
    <WorksCard 
    key={work.id}
    image={work.img}
    tags={work.tags}
    title={work.title}
    description={work.description}
    demo={work.demo}
    code={work.code}
    />
    ))
   
    return (
        <div className="works__wrapper">

        {currentState === 0 &&
            <div className="works__card flex-row">
                {worksElements}
            </div>
        }

        
        </div>
        
    )
}