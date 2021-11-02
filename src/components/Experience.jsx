import React from "react";
import "./Experience.css";


const Experience = ({ experience }) => {
    return (
        <div class="experience__container">
        <div>
        <h1 class=" experience__title">Experiencia laboral</h1>
            {experience.map((item) => {
                return(                     
                    <div class="experience__list" key={JSON.stringify(item)}>
                         <p class="experience__work">{item.date}-{item.name}</p>
                         <p><u>cargo:</u> {item.work}</p>
                         <p><u>función:</u> {item.description}</p>
                    </div>
                )
            })}
        </div>
     </div>


    );
}

export default Experience;