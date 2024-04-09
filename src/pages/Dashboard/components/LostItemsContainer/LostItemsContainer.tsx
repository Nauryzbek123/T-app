import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./LostItemsContainer.css";

const styleOfIcons = {
  width: "30px",
  height: "29px",
  color: "#D7E0FF",
  border: "0px solid #35A8DC",
  marginLeft: "9px"
};

export const LostItemsContainer = () => {
  return (
    <div className="ItemsMain">
      <div className="ImgContainer">
        <div className="MissingItem">Найдено</div>
      </div>
      <div className="elementContainer">
        <p>Беспроводные наушники</p>
        <p>jbl</p>
        <p>D112</p>
        <p>06.12.2024</p>
      </div>
      <div className="containerFooter">
        <div className="detail">Подробнее</div>
        <div>
        <FontAwesomeIcon icon={faPhone} style={styleOfIcons} />
        <FontAwesomeIcon icon={faShareAlt} style={styleOfIcons} />
        <FontAwesomeIcon icon={faHeart} style={styleOfIcons} />
        </div>
        
      </div>
    </div>
  );
};

export default LostItemsContainer;