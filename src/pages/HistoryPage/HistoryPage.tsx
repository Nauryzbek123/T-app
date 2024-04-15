import { Input } from "antd";
import "./HistoryPage.css";

export const HistoryPage = () =>{
    const contactInputStyle = {
        width: "450px",
        height: "30px",
        backgroundColor: "#D9D9D9",
        marginLeft: "65px",
        marginTop: "10px",
      }
    return <div className="History">
        <div className="HistoryCont">
        <p className="HistTxt Completed">Completed</p>
        <span className="HistInputTxt">Owner name*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

    <span className="HistInputTxt">Category*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

        <span className="HistInputTxt">Date*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

<span className="HistInputTxt">Location*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />
      </div>
      <div className="HistoryCont">
        <p className="HistTxt Progressing">Progressing</p>
        <span className="HistInputTxt">Owner name*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

    <span className="HistInputTxt">Category*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

        <span className="HistInputTxt">Date*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />

<span className="HistInputTxt">Location*</span>
        <Input
          placeholder=""
          variant="filled"
          style={contactInputStyle}
        />
      </div>
    </div>
}

export default HistoryPage;