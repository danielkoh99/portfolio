/* eslint-disable camelcase */
import axios from 'axios';

async function fetchData(url, options) {
  try {
    const response = await axios.get(url, options);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
