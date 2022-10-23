import Featured from "../../Components/featured/featured";
import FeaturedList from "../../Components/List/List";
import NavBar from "../../Components/navbar/NavBar";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <NavBar/>
            <Featured/>
            <FeaturedList/>
            <FeaturedList/>
            <FeaturedList/>
        </div>
    )
}

export default Home;