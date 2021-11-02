import React from "react";
import "./Education.css";


const Education = ({ education }) => {
    return (
        <div class="education__container">
           <div>
           <h1 class="education__title"> Formación académica</h1>
               {education.map((item) => {
                   return(                     
                       <div class="education__list" key={JSON.stringify(item)}>
                            <p><strong>{item.name}</strong> - {item.where} <p class="status__class">{item.status}</p></p>
                       </div>
                   )
               })}
           </div>
        </div>


    );
}

export default Education;