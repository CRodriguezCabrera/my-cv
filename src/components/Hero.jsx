import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
    return (
        <div class="hero__container">
            <div class="img__container">
                <img src={hero.image} alt="" />
            </div>
            <div class="aboutMe__container">
                <p> <strong>Nombre y Apellidos:</strong> {hero.name}</p>
                <p> <strong>Fecha de nacimiento:</strong> {hero.birthDate}</p>
                <p> <strong>Dirección: </strong>{hero.adress}</p>
                <p> <strong>Teléfono:</strong> {hero.phone}</p>
                <p> <strong>email:</strong> {hero.email}</p>
                <p><a href={hero.gitHub}><strong>GitHub</strong></a></p>
                
            </div>
        </div>


    );
}
export default Hero;