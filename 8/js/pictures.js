import {getPhotos} from './utils.js';

const pictureStorage = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const photos = getPhotos();

const pictureListFragment = document.createDocumentFragment();

photos.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.appendChild(pictureElement);
});

pictureStorage.appendChild(pictureListFragment);
