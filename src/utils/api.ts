import axios from "axios";
export default axios.create({
  baseURL: "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
