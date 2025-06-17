import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5ec2fee8e0e40e8a564d5eab07326ee",
  },
});
