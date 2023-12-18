import axios from 'axios';


const API_KEY = '40776617-c995336b68f8f57ab462a36fa';
const BASE_URL = 'https://pixabay.com/api/'


export async function fetchImages(userInput, page) {
    const params = new URLSearchParams({
      key: API_KEY,
      q: userInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      per_page: 12,
      page,
    });
    const res = await axios.get(`${BASE_URL}?${params}`);
    return res.data;
  }