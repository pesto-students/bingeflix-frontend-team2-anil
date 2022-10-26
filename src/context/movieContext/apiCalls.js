import axios from "axios";
import {  createMovieFailure, createMovieSuccess, createMovieStart, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart } from "./MovieActions";

export const getMovies =  async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
    } catch(err) {
        dispatch(getMoviesFailure());
    }
};

export const createMovie =  async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await axios.post("/movies", movie, {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch(err) {
        dispatch(createMovieFailure());
    }
};

export const deleteMovie =  async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        const res = await axios.delete("/movies/"+id, {
            headers: {
                token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMovieSuccess(res.data));
    } catch(err) {
        dispatch(getMoviesFailure());
    }
};