import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.chucknorris.io/",
});

export default {
  getRandom() {
    return instance.get("jokes/random");
  },
  queryFacts(query) {
    return instance.get(`/jokes/search?query=${query}`);
  },
};