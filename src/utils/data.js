import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "d3e5c7b3bdmsh0e2306cb4192ce3p1d062bjsn00abee893961",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
