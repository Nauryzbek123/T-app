import "./EmojiDesc.css";
export const EmojiDesc = () => {
  return (
    <div className="main">
      <div className="firstDesc">
        <img
          src={require("../../assets/img/emoji1.jpg")}
          alt=""
          className="emj1"
          width={"700px"}
          height={"500px"}
        /> 
        <div className="textDesc">
           <h3>Lose your property?</h3>
           <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        </div>
      </div>
      <div className="secondDesc">
      <div className="textDesc" style={{marginLeft: "50px"}}>
           <h3>Use the T-appScreen platform.</h3>
           <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        </div>
        <img
          src={require("../../assets/img/emoji2.jpg")}
          alt=""
          className="emj1"
          width={"700px"}
          height={"500px"}
        /> 
      </div>
      <div className="thirdDesc">
      <img
          src={require("../../assets/img/emoji3.jpg")}
          alt=""
          className="emj1"
          width={"300px"}
          height={"700px"}
        /> 
        <div className="textDesc3">
           <h3>Find your property conveniently and easily.</h3>
           <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
        </div>
      </div>
    </div>
  );
};

export default EmojiDesc;
