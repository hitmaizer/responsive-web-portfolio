/* eslint-disable no-plusplus */
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
        const usedWorks = []
        if (currentState === 1) {
            worksArray.forEach(work => {
                if (work.category === "responsive") {
                    usedWorks.push(work)
                }
            })
        } else if (currentState === 2) {
            worksArray.forEach(work => {
                if (work.category === "react") {
                    usedWorks.push(work)
                }
            })
        } else if (currentState === 3) {
            worksArray.forEach(work => {
                if (work.category === "ui") {
                    usedWorks.push(work)
                }
            })
        } else if (currentState === 4){
            worksArray.forEach(work => {
                if (work.category === "other") {
                    usedWorks.push(work)
                }
            })
        } else if (currentState === 0) { 
            for (let i = 0; i < 4; i++) {
                const randomNumber = Math.floor(Math.random() * worksArray.length)
                const randomWork = worksArray[randomNumber]
                usedWorks.push(randomWork)
            }        
        }

        setWorksData(usedWorks)
        
    }, [currentState])

    

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
        <div className="worksection__wrapper">
                <div className="works__card flex-row">
                    {worksElements}
                </div>        
        </div>
    )
}