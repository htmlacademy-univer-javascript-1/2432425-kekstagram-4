import {getPhotosCount, getIdsNum, getUrlsNum, getAvatarIdsNum, getLikesCount, getDescriptions, getCommentSentences, getCommentatorsNames} from './data.js';
const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (first, last) => Math.ceil(Math.random() * (last - first + 1) + (first - 1));

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createRandomUniqueNum = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateId = createRandomUniqueNum(getIdsNum().MIN, getIdsNum().MAX);
const generateUrl = createRandomUniqueNum(getUrlsNum().MIN, getUrlsNum().MAX);
const generateCommentId = createRandomUniqueNum(1, 1000);

const createMessage = () => getRandomArrayElement(getCommentSentences());

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(getAvatarIdsNum().MIN, getAvatarIdsNum().MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(getCommentatorsNames()),
});

const createPhotoDescription = () => ({
  id: generateId(),
  url: `photos/${generateUrl()}.jpg`,
  description: getRandomArrayElement(getDescriptions()),
  likes: getRandomInteger(getLikesCount().MIN, getLikesCount().MAX),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const getPhotos = () => Array.from({length: getPhotosCount()}, createPhotoDescription);

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;

  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export const isEscapeKey = (evt) => evt.key === 'Escape';

export {getPhotos, showAlert, debounce};

