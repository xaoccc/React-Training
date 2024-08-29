import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="hero_area">

      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" />
        </div>
      </div>



      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                Finexo
              </span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/React-Training">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/React-Training/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/React-Training/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/React-Training/whyus">Why Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/React-Training/team">Team</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a>
                </li>
                <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>



    </div>
  )
}



