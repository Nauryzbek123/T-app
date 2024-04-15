import { Input } from "antd";
import "./AddNotificationPage.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddNotificationPage = () => {
  const inputStyle = {
    width: "500px",
    backgroundColor: "#D9D9D9",
    marginTop: "10px",
    marginLeft: "70px",
  };

  const iconStyle = {
    width: "80px",
    height: "80px",
  };

  const contactInputStyle = {
    width: "450px",
    height: "30px",
    backgroundColor: "#D9D9D9",
    marginLeft: "65px",
    marginTop: "10px",
  }
  return (
    <div className="Addnotification">
      <p className="WelcomeTxt">Create anouncement</p>
      <div
        style={{
          width: "100%",
          height: "1px",
          borderColor: "#C4C4C4",
          borderBottom: "3px solid gray",
        }}
      ></div>
      <div className="DescribeCont">
        <p className="contText">Describe in detail</p>
        <span className="spanTxt" style={{ marginTop: "10px" }}>
          Enter name*
        </span>
        <Input placeholder="" variant="filled" style={inputStyle} />
        <span className="spanTxt" style={{ marginTop: "20px" }}>
          Category*
        </span>
        <Input placeholder="" variant="filled" style={inputStyle} />
      </div>

      <div className="addImgCont">
        <p className="contText">Image</p>
        <div className="horizontalImg">
          <div className="imgCont" style={{ marginLeft: "70px" }}>
            <span className="spanTxt">Add image</span>
          </div>
          <div className="imgContGray">
            <FontAwesomeIcon icon={faCamera} style={iconStyle} />
          </div>
          <div className="imgContGray">
            <FontAwesomeIcon icon={faCamera} style={iconStyle} />
          </div>
        </div>
        <br />
        <div className="horizontalImg">
          <div className="imgContGray" style={{ marginLeft: "70px" }}>
            <FontAwesomeIcon icon={faCamera} style={iconStyle} />
          </div>
          <div className="imgContGray">
            <FontAwesomeIcon icon={faCamera} style={iconStyle} />
          </div>
          <div className="imgContGray">
            <FontAwesomeIcon icon={faCamera} style={iconStyle} />
          </div>
        </div>
      </div>

      <div className="addImgCont" style={{ marginTop: "100px" }}>
        <span className="spanTxt" style={{ marginTop: "50px" }}>
          Description*
        </span>
        <Input
          placeholder=""
          variant="filled"
          style={{
            width: "900px",
            height: "250px",
            backgroundColor: "#D9D9D9",
            marginLeft: "65px",
            marginTop: "20px",
          }}
        />
      </div>

      <div className="Location">
        <span className="spanTxt" style={{ marginTop: "50px" }}>
          Location*
        </span>
        <Input
          placeholder=""
          variant="filled"
          style={{
            width: "500px",
            height: "50px",
            backgroundColor: "#D9D9D9",
            marginLeft: "65px",
            marginTop: "20px",
          }}
        />
      </div>

      <div className="ContactInformation">
        <p className="contText">Contact Information</p>
        <span className="ContactTxt">The contact person*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

    <span className="ContactTxt">Email address*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

        <span className="ContactTxt">Call number*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />
      </div>

      <div className="PrevPubl">
        <p className="publishText" style={{marginTop: "30px",marginRight: "30px"}}>Preview</p>
        <div className="publish">
        <p className="publishText">Publish</p>
        </div>
      </div>
    </div>
  );
};

export default AddNotificationPage;
