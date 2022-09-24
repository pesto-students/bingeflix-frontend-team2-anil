import "./featured.scss"
import { PlayArrowOutlined,InfoOutlined } from "@material-ui/icons"

const Featured = () => {
    return (
        <div className="featured">
            <img width={"100%"} src="https://picsum.photos/500"/>
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
    )
}

export default Featured;