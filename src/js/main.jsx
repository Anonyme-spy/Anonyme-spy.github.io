/* global $ */
import React, {useEffect} from "react";

function ParallaxContainer({children, imageSrc, altText}) {
  useEffect(() => {
    $(".parallax").parallax();
  }, []);

  return (
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">{children}</div>
      </div>
      <div className="parallax">
        <img src={imageSrc} alt={altText} width="85%" />
      </div>
    </div>
  );
}

function WorkSection() {
  useEffect(() => {
    $(".parallax").parallax();
  }, []);

  return (
    <div className="container" id="work">
      <div className="section">
        <div className="row">
          <div className="col s12 center">
            <h3>
              <i className="fas fa-briefcase orange-text"></i>
            </h3>
            <span className="work cyan-text text-lighten-3">WORK</span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://iili.io/JXYSCP9.jpg" alt="" />
                <span className="card-title cyan-text text-lighten-3">
                  Password Generator
                </span>
              </div>
              <div className="card-content">
                <p>
                  Fk tk (sorry for swearing). <br /> It is pain in ass to use
                  that sht,why would they make something so useless? but here it
                  is.
                </p>
              </div>
              <div className="card-action">
                <a href="https://github.com/Anonyme-spy/Password-generator">
                  Source code
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://iili.io/Jvlet1V.gif" alt="" />
                <span className="card-title cyan-text text-lighten-3">
                  This Portfolio
                </span>
              </div>
              <div className="card-content">
                <p>
                  I've cry for making this website literally. <br />
                  Coding it with React was painful when everything break but it
                  here now. <br />
                  Successfully created my website with react, I like the sense
                  of accomplishment. <br />
                </p>
              </div>
              <div className="card-action">
                <a href="https://github.com/Anonyme-spy/Anonyme-spy.github.io">
                  Source code
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://iili.io/JX7froQ.jpg" alt="" />
                <span className="card-title cyan-text text-lighten-3">
                  Weather App
                </span>
              </div>
              <div className="card-content">
                <p>
                  This one was a piece of cake. <br />I still don't understand
                  API completely but it work perfectly, maybe i should look for
                  project that involve more of API but i liked it. <br />
                  Javascript is so enjoyable to work with. <br /> I plan to work
                  more with it.
                </p>
              </div>
              <div className="card-action">
                <a href="https://github.com/Anonyme-spy/Codedex-JS-Final-Project">
                  Source code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Usage
export default function Menu() {
  return (
    <>
      <ParallaxContainer imageSrc="https://iili.io/JjT9TyN.jpg" altText="Yo!">
        <div className="row center first">
          <h5 className="header col s12 light speech">
            “If you find of a shortcut, use it as a last resort, then take a
            path that will make you growth and then when encountered a block
            that can't be pass? Seek for help and when no one are able or
            doesn't help, then you take that shortcut”
          </h5>
        </div>
      </ParallaxContainer>

      <WorkSection />

      <ParallaxContainer
        imageSrc="https://iili.io/JjT9TyN.jpg"
        altText="Thanks for visiting">
        <div className="row center">
          <h5 className="header col s12 speech">
            Thanks for stopping by! Head to the bottom if you'd like to link up.
          </h5>
        </div>
      </ParallaxContainer>
    </>
  );
}
