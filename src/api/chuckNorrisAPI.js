import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.chucknorris.io/",
});

export default {
  getRandomFact() {
    return instance.get("jokes/random");
  },
  getFact(id) {
    return instance.get(`jokes/${id}`);
  },
  queryFacts(query) {
    return instance.get(`/jokes/search?query=${query}`);
  },
};
