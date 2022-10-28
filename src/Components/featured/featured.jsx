import "./featured.scss"
import { PlayArrow,InfoOutlined } from "@material-ui/icons"
import axios from "axios"
import { useState,useEffect } from "react"
 
const Featured = ({type}) => {
    const [content,setContent] = useState({})
    useEffect(() => {
      const getRandomContent = async () => {
        try{
            const res = await axios.get("/movies/random?type=${type}", {
                headers: {
                  token:
                  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                },
              });
            setContent(res.data[0])
        }catch (err){
            console.log(err);
        }
      }

    }, [type])
    
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
            //    src={require("../../images/lotrbackground.jpg")}
            src={content.img}
               alt=""/>
            <div className="info">
                <img 
                //    src={require('../../images/lordoftherings2.png')}
                src={content.imgTitle}
                   alt=''/>
                <span className="desc">
                    {content.desc}    
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