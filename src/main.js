import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Enter your search query' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data.hits.length) {
        iziToast.warning({
          title: 'Attention',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(data.hits);
      iziToast.success({
        title: 'Success',
        message: `Found ${data.hits.length} images`,
      });
    })
    .catch(error => {
      hideLoader();
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to load data',
      });
    });
});
