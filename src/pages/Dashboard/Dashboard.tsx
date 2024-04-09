import { ItemsContainer } from "../../components/ItemsContainer";
import { Items } from "../MainPage/components/Items";
import "./Dashboard.css";
import { LostItemsContainer } from "./components/LostItemsContainer";

export const DashboardPage = () => {
  return (
    <div className="DashboardMain">
      <p className="WelcomeTxt">Welcome Dashboard !!!</p>
      <div className="LatestStory">
        <p className="latestStoryTxt">Latest story</p>
        <div className="StoryCirclesMain">
          <div className="StoryCircles"></div>
          <div className="StoryCircles"></div>
          <div className="StoryCircles"></div>
          <div className="StoryCircles"></div>
          <div className="StoryCircles"></div>
          <div className="StoryCircles"></div>
        </div>
      </div>
      <div className="SectionCategory">
        <p className="sectByCategoryTxt">Section by category</p>
        <div className="RowCategory">
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/notes.svg").default}
              alt=""
            />
            <p>Books & Notes</p>
          </div>
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/key.svg").default}
              alt=""
            />
            <p style={{marginTop: "40px"}}>Keys</p>
          </div>
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/phones.svg").default}
              alt=""
            />
            <p>Phones</p>
          </div>
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/documents.svg").default}
              alt=""
            />
            <p>Documents</p>
          </div>
        </div>
        <br />
        <div className="RowCategory">
        <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/Accessories.svg").default}
              alt=""
            />
            <p>Accessories</p>
          </div>
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/bags.svg").default}
              alt=""
            />
            <p>Bags</p>
          </div>
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/heads.svg").default}
              alt=""
            />
            <p>Headphones</p>
          </div>
          <div className="TextWithIcon">
            <img
              src={require("../../assets/icons/watch.svg").default}
              alt=""
            />
            <p>Watch</p>
          </div>
        </div>
      </div>
      <p className="sectByCategoryTxt" style={{marginTop: "150px",marginLeft: "170px"}}>Recent lost and found property</p>
     <div className="ItemsLost">
     <LostItemsContainer/>
     <LostItemsContainer/>
     <LostItemsContainer/>

     </div>
      



    </div>
  );
};

export default DashboardPage;
