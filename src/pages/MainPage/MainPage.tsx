import { Header } from "../../components/Header";
import { FilterContainer } from "./components/FilterContainer";
import { Items } from "./components/Items";

const MainPage = () =>{
    return (
      <div>
        <Header/>
        <FilterContainer/>
         <Items/>
      </div>
    )
  }
  
  export default MainPage;