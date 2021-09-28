import axios from "axios";

const KEY = "YOUR_KEY";

export default axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
  params: {
    key: KEY,
  },
});
