import React from "react";

export default function HeaderSec() {
  return (
    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br />
          <br />
          <h1 className="header center">
            <i className="fab fa-html5 deep-orange-text"></i> 
            <i className="fab fa-css3-alt cyan-text"></i> 
            <i className="ion-social-javascript yellow-text text-darken-1"></i> 
            <i className="fab fa-react blue-text"></i> 
            <i className="fab fa-python light-green-text text-accent-2"></i>
            <i className="fab fa-php cacher" style={{display: "none"}}></i>
          </h1>
          <div className="row center">
            <h4 className="header col s12 teal-text speech">
              WEB DEVELOPER <i className="ion-plus-round"></i> PROGRAMER
            </h4>
          </div>
          <div className="row center">
            <br />
            <br />
            <button
              href="#work"
              id="download-button"
              className="btn-large waves-effect waves-light teal-text text-lighten-5 blue"
              onClick={() =>
                document
                  .getElementById("work")
                  .scrollIntoView({behavior: "smooth"})
              }>
              Check out my work
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="parallax">
        <img
          src="https://iili.io/JjT9TyN.jpg"
          width="85%"
          alt="Komi-san wa Komyushou desu who want a hug"
        />
      </div>
    </div>
  );
}
