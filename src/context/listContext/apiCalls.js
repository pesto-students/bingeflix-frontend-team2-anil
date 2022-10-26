import axios from "axios";
import { getListsStart, getListsFailure, getListsSuccess, createListStart, createListSuccess, createListFailure, deleteListStart, deleteListSuccess, deleteListFailure } from "./ListActions";

export const getLists =  async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch(err) {
        dispatch(getListsFailure());
    }
};

export const createList =  async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post("/movies", list, {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch(err) {
        dispatch(createListFailure());
    }
};

export const deleteList =  async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        const res = await axios.delete("/lists/"+id, {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListSuccess(res.data));
    } catch(err) {
        dispatch(deleteListFailure());
    }
};