import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');

let page = 1;
let searchQuery = '';

const searchFromSubmit = async event => {
  try {
    event.preventDefault();

    showLoader();

    searchQuery = event.currentTarget.elements.user_query.value.trim();

    if (searchQuery === '') {
      hideLoader();

      iziToast.error({
        title: 'Error!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      return;
    }

    page = 1;

    loadMoreBtnEl.classList.add('hidden');

    const { data } = await fetchPhotosByQuery(searchQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      galleryEl.innerHTML = '';

      searchFormEl.reset();

      SimpleLightbox.refresh();

      return;
    }

    if (data.totalHits > 1) {
      loadMoreBtnEl.classList.remove('hidden');

      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryTamplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.innerHTML = galleryTamplate;

    new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    // console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};

const showLoader = () => loader.classList.remove('is-hidden');

const hideLoader = () => loader.classList.add('is-hidden');

searchFormEl.addEventListener('submit', searchFromSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;
    const { data } = await fetchPhotosByQuery(searchQuery, page);

    const galleryTamplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTamplate);

    smoothScroll();

    if (page * 15 >= data.totalHits) {
      iziToast.error({
        title: 'Error!',
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtnEl.classList.add('hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    console.log(error);
  }
};

const smoothScroll = () => {
  const { height: cardHeight } = galleryEl.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
console.log(smoothScroll);
