const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.pictures');

const renderPhoto = ({url, description, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneCode(true);

  pictureElement.querySelector('.picture_img').src = url;
  pictureElement.querySelector('.picture_img').alt = description;
  pictureElement.querySelector('.picture_comments').textContent = comments.length;
  pictureElement.querySelector('.picture_likes').textContent = likes;

  return pictureElement;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    fragment.appendChild(renderPhoto(photo));
  });

  pictures.appendChild(fragment);
};

export {renderPhotos};
