import "./ListItem.scss"
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

const ListItem = ({index}) => {

  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <div className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >

      <img src={require("../../images/logo_1.png")} alt="" />

      {isHovered && (
          <>
            <video src={require('../../images/sample-mp4-file-small.mp4')} autoPlay={true} loop />

            <div className="itemInfo">

              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>

              <div className="itemInfoTop">
                <span>1hr 32 mins</span>
                <span className="limit">+16</span>
                <span>2000</span>
              </div>

              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc ullamcorper tortor ut erat bibendum consectetur. 
              </div>

              <div className="genre">Action</div>

            </div>
          </>)}
    </div>
  )
}

export default ListItem;
