import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:5000",
});

export default fetcher;