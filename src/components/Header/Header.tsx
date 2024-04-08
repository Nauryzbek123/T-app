import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="Header">
        <img
          src={require("../../assets/img/mainIcon.png")}
          alt=""
          className="Logo"
        />
      <div className="header-left-text">
        <a className="T-app">T-AppScreen</a>
        <a className="left-text" href="">Book & Notes </a>
        <a className="left-text" href="">Keys</a>
        <a className="left-text" href="">Phones</a>
        <a className="left-text" href="">Documents</a>
        <a className="left-text" href="">Bugs</a>
        <a className="left-text" href="">Headphones</a>
        <a className="left-text" href="">Watch</a>
      </div>

      <div className="header-container-right">
        <a href="" className="blue-color">Language</a>
        
        <a href="/login"  className="white-color">
            Log in
            </a>
        <a href="/registration" className="blue-color">Register</a>
      </div>
    </header>
  );
};

export default Header;
