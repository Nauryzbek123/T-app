import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const styleIcon = {
    color: '#000000',
    width: '44px',
    height: '44px',
    marginRight: '10px'
};
const FooterCont: React.FC = () => {
  return (
    <footer className="footer">
      <div className="first">
      <p>Mobile app</p>
        <p>Community</p>
        <p>Company</p>
        <div className="logo">
        <img
          src={require("../../assets/img/mainIcon.png")}
          alt=""
          className="Logo"
        />
        <h3 >T-AppScreen</h3>
        </div>
        <p>Help</p>
        <p>Blog</p>
        <p>Resources</p>
      </div>
      <div className="horizontal-line"></div>
       <div className="socialMedia">
       <FontAwesomeIcon icon={faInstagram} style={styleIcon} />
        <FontAwesomeIcon icon={faWhatsapp} style={styleIcon} />
        <FontAwesomeIcon icon={faTelegram} style={styleIcon} />
       </div>
       <div className="inc">
         <p>© Photo, Inc. 2024. We love our users!</p>
       </div>
    </footer>
  );
};

export default FooterCont;
