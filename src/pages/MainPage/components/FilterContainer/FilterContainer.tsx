import Search from "antd/es/input/Search";
import "./FilterContainer.css";
import { SearchBar } from "../../../../components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const FilterContainer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="container">
      <SearchBar />
      <div className="FirstLine">
        <div className="SmallContainer">
          <p>Lost</p>
        </div>
        <input
          type="radio"
          value="option1"
          checked={isChecked}
          onChange={handleRadioChange}
          className="radio"
        />
        
        <div className="LocationContainer">
          <p>Location</p>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{
              color: "#000000",
              width: "25px",
              height: "25px",
              marginRight: "10px",
            }}
          />
        </div>
        <div className="LocationContainer">
          <p>dd.mm.yyyy</p>
          <FontAwesomeIcon
            icon={faCalendar}
            style={{
              color: "#000000",
              width: "25px",
              height: "25px",
              marginRight: "10px",
            }}
          />{" "}
        </div>
      </div>

      <div className="FirstLine">
      <div className="SmallContainer">
          <p>Found</p>
      </div> 
      <input
          type="radio"
          value="option2"
          checked={isChecked}
          onChange={handleRadioChange}
          className="radio"
        />
        <div className="SmallContainer">
          <p>Submit</p>
      </div> 
      </div>
      
    </div>
  );
};

export default FilterContainer;
