import "./navbar.scss"
import { Search,ArrowDropDown,Notifications } from "@material-ui/icons"
import { useState } from "react";

function NavBar() {

    const [isScrolled,setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => {window.onscroll = null}
    }

    console.log(isScrolled,window.pageYOffset);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img className="logo" src={require("../../images/logo.png")} alt="BingeFlix"/>
                    <span className="tabs">Home</span>
                    <span className="tabs">Series</span>
                    <span className="tabs">Movies</span>
                    <span className="tabs">New and Popular</span>
                    <span className="tabs">My Collections</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Profile</span>
                    <Notifications className="icon"/>
                    <div className="profile">
                        <img className="usericon" src={require("../../images/user.png")} alt="User"/>
                        <ArrowDropDown className="dropdown"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;