import axios from 'axios';

const apiBaseUrl = 'https://run.mocky.io/v3'

export const fetchPeople = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/0c0c684d-f6cb-4832-b5f4-16c6796f950f`);

    if (response.status < 200 || response.status > 299) return;

    return response.data;
  } catch (error) {
    console.error(`Error fetching people - ${error}`);
    return;
  }
}

export const fetchShifts = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/91a019a1-318a-45a9-a251-d1df1712a647`);

    if (response.status < 200 || response.status > 299) return;

    return response.data;
  } catch (error) {
    console.error(`Error fetching shifts - ${error}`);
    return;
  }
}