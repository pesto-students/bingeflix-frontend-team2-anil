import "./featured.scss"
import { PlayArrow,InfoOutlined } from "@material-ui/icons"
 
const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies"?"Movies":"Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img 
               src={require("../../images/lotrbackground.jpg")}
               alt=""/>
            <div className="info">
                <img 
                   src={require('../../images/lordoftherings2.png')}
                   alt=''/>
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus id laboriosam repellendus unde doloremque quasi? Numquam fuga quae accusantium adipisci similique ipsum autem, nesciunt eligendi doloremque possimus consequuntur quidem.      
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
               {/* <div className="poster"></div>
            <div className="movie">
                <img className="logo" src={require("../../images/lordoftherings2.png")}/>
                <div className="movieInfo">
                </div>
                <div className="buttons">
                    <div>
                        <PlayArrowOutlined className="icon" />
                        <span className="text">Play</span>
                    </div>
                    <div>
                        <InfoOutlined className="icon" />
                        <span className="text">More Info</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Featured;