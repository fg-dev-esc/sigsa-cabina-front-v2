import axios from 'axios';

export const get = async (url) => {
  try {
    const token = localStorage.getItem('token');
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const response = await axios.get(url, config);
    return { code: 0, data: response.data };
  } catch (error) {
    return { code: -1, error: error.response?.data || error.message };
  }
};

export const post = async (url, body) => {
  try {
    const token = localStorage.getItem('token');
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const response = await axios.post(url, body, config);
    return { code: 0, data: response.data };
  } catch (error) {
    return { code: -1, error: error.response?.data || error.message };
  }
};
