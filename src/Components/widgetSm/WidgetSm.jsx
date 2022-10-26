import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(()=>{
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true",{
          headers:{
            token:"Bearer "
          },
        });
        setNewUsers(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getNewUsers();
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://i.pinimg.com/1200x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>            
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        )}
      </ul>
    </div>
  );
}
