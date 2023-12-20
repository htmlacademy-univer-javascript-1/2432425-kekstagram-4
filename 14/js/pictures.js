const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (({url, description, likes, comments, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureId = id;

  return pictureElement;
});

const renderPictures = (pictures, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());

  const pictureListFragment = document.createDocumentFragment();
  pictures.forEach((item) => {
    const thumbnail = createPictures(item);
    pictureListFragment.append(thumbnail);
  });

  container.append(pictureListFragment);
};

export {renderPictures};
