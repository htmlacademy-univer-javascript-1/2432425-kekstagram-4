import { showBigPicture } from './big-picture';
import { renderPictures } from './pictures';

const container = document.querySelector('.pictures');
const renderGallery = (pictures) => {

  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-picture-id]');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.pictureId
    );

    showBigPicture(picture);
  });

  renderPictures(pictures, container);
};

export {renderGallery};
