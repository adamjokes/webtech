import Axios from "axios";
import { API } from "../conf";

const axios = Axios.create({
  // baseURL: "http://localhost:3000/api"
  headers:{
    'authorization': API
  }
});

export default axios;