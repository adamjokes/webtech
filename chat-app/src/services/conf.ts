import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://server:3000"
});

export default axios;