import React from "react";
import "./More.css";


const More = ({ more }) => {
    return (
        <div class="more__container">
           <div class="more__list">
                <h2 class="more__title">Otros datos</h2>
                <p> <strong>Idiomas:</strong> {more.language}</p>
                <p> <strong>Informática:</strong>  {more.computing}</p>
                <p> <strong>Herramientas:</strong>  {more.tools}</p>  
            </div>
        </div>


    );
}

export default More;