import { Footer } from "antd/es/layout/layout";
import { EmojiDesc } from "../../components/EmojiDesc";
import { Header } from "../../components/Header";
import { VideoPlayer } from "../../components/VideoPlayer";
import { FilterContainer } from "./components/FilterContainer";
import { Items } from "./components/Items";
import { FooterCont } from "../../components/Footer";

const MainPage = () =>{
    return (
      <div>
        <FilterContainer/>
         <Items/>  
         <VideoPlayer/>
         <EmojiDesc/>
      </div>
    )
  }
  
  export default MainPage;