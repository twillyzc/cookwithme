import axios from "axios";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = process.env.REACT_APP_API_URL;

export const fetchUrl = (url) => axios.get(url).then((res) => res.data);
