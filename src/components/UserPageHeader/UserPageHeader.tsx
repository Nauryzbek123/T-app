import "./UserPageHeader.css";

export const UserPageHeader = () => {
  return (
    <div className="UserPageHeader">
      <div className="CreaterStory">
        <img
          src={require("../../assets/icons/camera.svg.svg").default}
          alt=""
          className=""
        />
        <p>Create story</p>
      </div>
      <div className="SearchData">
        <div className="SearchDataleftSide">
          <img src={require("../../assets/icons/filter.svg").default} alt="" />
          <p className="searchDataText">Search data</p>
        </div>
        <img
          src={require("../../assets/icons/searchdash.svg").default}
          alt=""
          style={{ marginRight: "15px" }}
        />
      </div>
      <img
          src={require("../../assets/icons/user-circle.svg.svg").default}
          alt=""
          className="User-circle"
          style={{marginLeft: "80px"}}
        />
      <div className="UserInter">
        <p className="UserTxt">User</p>
        <p>ID: 000045</p>
      </div>
    </div>
  );
};

export default UserPageHeader;
