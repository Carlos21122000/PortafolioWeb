import React from "react";

import "./portafolio.scss";
import Imagen1 from "../../assets/img/Lab3HTML.JPG";
import Imagen2 from "../../assets/img/Lab4CSS.JPG";
import Imagen3 from "../../assets/img/Lab5JS.JPG";
import Imagen4 from "../../assets/img/Lab8React.JPG";
import Imagen5 from "../../assets/img/Lab10Calcu.JPG";
import Imagen6 from "../../assets/img/Proyecto1.JPG";
import Imagen7 from "../../assets/img/Proyecto2.JPG";
import '.././App.css';
class Portafolio extends React.Component {
  render() {
    return (
        <div className="PortafolioSection" id="portafolio">
          <div className="parte2">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="titulo">PORTAFOLIO</h1>
              <h6 className="subtitulo">Proyectos realizados</h6>
              <div class="container"></div>
                <table className="table1 " align="center">
                 <tbody>
                  <tr>
                  <div class="row">
                  <div class="col">
                    <th className="portadaSong"><img src={Imagen1}></img><h4>HTML</h4><a href="http://stw-uvg.site/labs/lab03/Raxtum%2019721/principal.html" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                  </div>  
                  <div class="col">
                    <th className="portadaSong"><img src={Imagen2}></img><h4>CSS</h4><a href="http://stw-uvg.site/labs/lab04/Raxtum19721/Imagen.html" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                    </div>
                    <div class="col">
                    <th className="portadaSong"><img src={Imagen3}></img><h4>JS Chat</h4><a href="http://stw-uvg.site/labs/lab06/Raxtum19721/index.html" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                  </div>
                  </div>
                  </tr> 
                </tbody>
            </table>
            <table className="table1" align="center">
                <tbody>
                  <tr>
                  <div class="row">
                    <div class="col">
                    <th className="portadaSong"><img src={Imagen4}></img><h4>React Memoria</h4><a href="http://stw-uvg.site/labs/lab08/Raxtum19721/index.html" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                    </div>
                    <div class="col">
                    <th className="portadaSong"><img src={Imagen5}></img><h4>Calculadora</h4><a href="http://stw-uvg.site/labs/lab10/Raxtum19721/index.html" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                    </div>
                    <div class="col">
                    <th className="portadaSong"><img src={Imagen6}></img><h4>Proyecto1</h4><a href="http://stw-uvg.site/proyectos/proyecto1/Raxtum19721/dist/index.html" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                    </div>
                  </div>
                  </tr>
                </tbody>
            </table>
            <table className="table1" align="center">
                <tbody>
                  <tr>
                  <div class="row">
                    <div class="col">
                    <th className="portadaSong"><img src={Imagen7}></img><h4>E commerce</h4><a href="https://proyecto2dev.stw-uvg.site/" className="btn btn-primary" target="_blank">Ver proyecto</a></th>
                    </div>
                  </div>
                  </tr>
                </tbody>
            </table>
            
            </div>
          </div>
        </div>
        </div>
    );
  };
};
export default  Portafolio;