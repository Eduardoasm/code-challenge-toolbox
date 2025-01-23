import axios from 'axios';

export const FETCH_SECRET_FILES = 'FETCH_SECRET_FILES';
const baseURL = 'http://localhost:5000';

export function fetchSecretFiles(queryParams = {}) {
  return async function (dispatch) {
    try {
      const url = new URL('/files/data', baseURL);
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });

      const { data } = await axios.get(url.toString());

      dispatch({
        type: FETCH_SECRET_FILES,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching secret files:', error);
      throw error;
    }
  };
}
