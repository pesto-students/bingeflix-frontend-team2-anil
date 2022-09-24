import Featured from "../../Components/featured/featured";
import NavBar from "../../Components/navbar/NavBar";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <NavBar/>
            <Featured/>
        </div>
    )
}

export default Home;