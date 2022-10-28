import Featured from "../../Components/featured/featured";
import FeaturedList from "../../Components/List/List";
import NavBar from "../../Components/navbar/NavBar";
import "./Home.scss"
// import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { List } from "@material-ui/core";

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {    
          try {
            const res = await axios.get(
              `lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`,
              {
                headers: {
                  token:
                  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                },
              });
            setLists(res.data);
            }catch (err) {
            console.log(err);
          }
        getRandomLists();
      }
    },[type, genre]);


    return (
        <div className="home">
            <NavBar/>
            <Featured type={type}/>
            {lists.map(list => {
              <List list = {list}/>
            })}
        </div>
    )
}

export default Home;