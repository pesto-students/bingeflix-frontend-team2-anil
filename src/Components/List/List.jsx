import "./List.scss"
import ListItem from "../ListItem/ListItem"
import { ArrowBackIosOutlined,ArrowForwardIosOutlined } from "@material-ui/icons"

export default function FeaturedList() {
  return (
    <div className="featuredlist">
      <span className="listTitle">Movies.</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left"/>
          <div className="container">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
          </div>
        <ArrowForwardIosOutlined className="sliderArrow right"/>
      </div>
    </div>
  )
}
