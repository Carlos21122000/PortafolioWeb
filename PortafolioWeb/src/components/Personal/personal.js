import React from "react";
import "./personal.scss";
import foto from "../../assets/img/carlos.jpg";
class Personal extends React.Component {
  render (){
    return(
        <div className="about-container" id="personal">
            <div className="about-desc">
                <h3 class = "text">¿Quíen soy?</h3>
                <p class= "text">
                Soy Carlos Ráxtum, estudiante de la universidad del valle. Actualmente Estoy cursando 
                el 3er año de mi carrera. Soy desarrollador, diseñador, creador de contenido. Tengo 20 años y me gusta practicar y ver deportes, escuchar 
                musica. Por cierto, mi carnet es 19721.
                </p>
            </div>
            <div className="about-img">
                <img
                src={foto}
                alt="about"
                />
            </div>
            </div>
    );
  };
};

export default Personal;
