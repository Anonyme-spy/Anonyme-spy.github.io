export default function Footer() {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="cyan-text text-lighten-3">Contact info</h5>
            <div className="divider light-green accent-2"></div>
            <p className="teal-text text-lighten-5">
              Anonymespy
              <br />
              Manakara 316, Andranofasika
              <br />
              Tel : coming soon
              <br />
              Email: Anonymespy1.0@gmail.com
            </p>
          </div>
          <div className="col l6 s12">
            <h5 className="cyan-text text-lighten-3">Connect</h5>
            <div className="divider light-green accent-2"></div>
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col l3">
                <a
                  className="blue btn-floating"
                  href="https://www.facebook.com/Anonymespy">
                  <i className="ion-social-facebook"></i>
                </a>
              </div>
              <div className="col l3">
                <a
                  className="white btn-floating"
                  href="https://github.com/Anonyme-spy">
                  <i className="ion-social-github black-text"></i>
                </a>
              </div>
              <div className="col l3">
                <a
                  className="black btn-floating"
                  href="https://www.tiktok.com/@anonymespy1?_t=8lnXEoGfDhA&_r=1"
                  style={{border: "solid 1px white"}}>
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
              <div className="col l3">
                <a
                  className="grey darken-3 btn-floating"
                  href="https://codepen.io/Anonyme-spy">
                  <i className="ion-social-codepen-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright orange">
        <div className="container">
          <p>© {new Date().getFullYear()} Anonyme-spy, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
