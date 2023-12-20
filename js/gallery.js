import { showBigPicture } from './big-picture.js';
import { renderPictures } from './pictures.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-picture-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.pictureId
  );

  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderPictures(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export {renderGallery};
