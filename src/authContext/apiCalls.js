import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const {email,password} = user
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email:email,
        password:password 
      })
    };

    fetch("/auth/login", requestOptions)
     .then((res)=>{
      console.log(res)
      dispatch(loginSuccess(res.data));
    })
     .catch((err)=>{
      console.log(err)
    })
    // const res = await axios.post("http://localhost:8080/api/auth/login", user);
    // dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};