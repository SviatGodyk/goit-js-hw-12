import axios from 'axios';

export const fetchPhotosByQuery = (searchQuery, currentPage) => {
  const axiosParams = {
    params: {
      key: '48537996-74d498ea386a1fe50c0c053c2',
      page: currentPage,
      per_page: 15,
      q: searchQuery,
    },
  };
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true`,
    axiosParams
  );
};
