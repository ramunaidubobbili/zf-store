import axios from "axios";

export default axios.create({
  baseURL: "https://62137de0f43692c9c606c0dd.mockapi.io/userapi/",
  headers: {
    "Content-type": "application/json"
  }
});