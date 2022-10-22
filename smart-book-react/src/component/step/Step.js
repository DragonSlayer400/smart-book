import React from "react";



const Step = ({ 
    step
 }) => {

    return (
        <div>
            <h2>Шаг { step.stepNumber }. { step.title }</h2>
            <p>{ step.stepDescription }</p>
            <p>{ step.stepResult }</p>
        </div> 
    )
}


export default Step;