import axios from 'axios';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 100,
    key: "AIzaSyAtxTmO2U0OeSYTHqBspiO9Y5sc3Kp3rKQ",
  },
});