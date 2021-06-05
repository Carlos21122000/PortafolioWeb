import React from "react";
import '.././App.css';
import face from "../../assets/img/face.png";
import insta from "../../assets/img/insta.png";
import linked from "../../assets/img/linked.png";

class Last extends React.Component {
  render (){
    return(
        
  <footer className="footer" id="last">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-4">
        <span className="copyright">Created by Carlos Ráxtum</span>
      </div>
      <div className="col-md-4">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="https://www.facebook.com">
              <img className="rounded-circle img-fluid" src={face} alt=""/>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/carlangas_2100/">
             <img className="rounded-circle img-fluid" src={insta} alt=""/>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com">
              <img className="rounded-circle img-fluid" src={linked} alt=""/>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="list-inline quicklinks">
          <li className="list-inline-item">
          <span className="copyright">4 Junio 2021</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    );
  };
};

export default Last;