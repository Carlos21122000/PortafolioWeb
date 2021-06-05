import React from "react";
import '.././App.css';
import './About.scss';
import HTML from "../../assets/img/html.jpg";
import node from "../../assets/img/Nodejs.png";
import react from "../../assets/img/react.png";
import webpack from "../../assets/img/webpack.png";
import babel from "../../assets/img/babel.png";
import eslint from "../../assets/img/eslint.png";

class About extends React.Component {
    render() {
        return (
            <section className="page-section" id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase" class="text">Tecnologias</h2>
                  <h3 className="section-subheading text-muted" >Manejo de estas tecnlogias</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={HTML} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="subheading" class="text">HTML, CSS, JS</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted" class="text">HTML es el lenguaje con el que se define el contenido de las páginas web. CSS es lo que se denomina lenguaje de hojas de estilo en cascada y se usa para estilizar elementos escritos en un lenguaje de marcado como HTML. JS es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás.  </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={node} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="subheading" class="text">NODEJS</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted"class="text">Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={react} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="subheading" class="text">REACT</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted" class="text">React es una librería Javascript focalizada en el desarrollo de interfaces de usuario. Así se define la propia librería y evidentemente, esa es su principal área de trabajo. </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={webpack} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="subheading" class="text">WEBPACK</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted" class="text">Webpack es una herramienta de compilación (una build tool en la jerga) que coloca en un grafo de dependencias a todos los elementos que forman parte de tu proyecto de desarrollo: código JavaScript, HTML, CSS, plantillas, imágenes, fuentes...</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={babel} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="subheading" class="text">BABEL</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted" class="text">Babel es un transcompilador de JavaScript gratuito y de código abierto que se utiliza principalmente para convertir el código ECMAScript 2015+ (ES6 +) en una versión de JavaScript compatible con versiones anteriores que puede ser ejecutada por motores JavaScript más antiguos. Babel es una herramienta popular para utilizar las funciones más nuevas del lenguaje de programación JavaScript. </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={eslint} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="subheading" class="text">ESLINT</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted" class="text">ESLint es una herramienta de código abierto enfocada en el proceso de "lintig" para javascript (o más correctamente para ECMAScript). ESLint es la herramienta predominante para la tarea de "limpiar" código javascript tanto en el servidor (node.js) como en el navegador.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
    };
};
export default  About;