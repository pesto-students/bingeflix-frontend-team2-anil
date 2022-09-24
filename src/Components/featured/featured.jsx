import "./featured.scss"
import { PlayArrowOutlined,InfoOutlined } from "@material-ui/icons"

const Featured = () => {
    return (
        <div className="featured">
            <div className="poster"></div>
            <div className="movie">
                <img className="logo" src={require("../../images/lordoftherings2.png")}/>
                <div className="movieInfo">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus id laboriosam repellendus unde doloremque quasi? Numquam fuga quae accusantium adipisci similique ipsum autem, nesciunt eligendi doloremque possimus consequuntur quidem.
                </div>
                <div className="options">
                    <div>
                        <PlayArrowOutlined className="icon" />
                        <span className="text">Play</span>
                    </div>
                    <div>
                        <InfoOutlined className="icon" />
                        <span className="text">More Info</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;