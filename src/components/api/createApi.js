import axios from "axios";

export default axios.create({
  baseURL: "https://620e6f26585fbc3359e2876f.mockapi.io/",
  headers: {
    "Content-type": "application/json"
  }
});