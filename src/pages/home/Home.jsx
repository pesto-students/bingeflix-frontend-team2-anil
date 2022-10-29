import Featured from "../../Components/featured/featured";
import FeaturedList from "../../Components/List/List";
import NavBar from "../../Components/navbar/NavBar";
import "./Home.scss"
// import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        console.log('Hello')
        console.log(type)
        console.log(genre)
        const getRandomLists = async () => {    
          try {
            const res = await axios.get(
              `lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`)
            console.log(res)
          }
           catch (err) {
            console.log(err);
          }
      }
      getRandomLists();
    },[type,genre]);


    return (
        <div className="home">
            <NavBar/>
            <Featured />
            <FeaturedList/>
            <FeaturedList/>
            <FeaturedList/>
        </div>
    )
}

export default Home;