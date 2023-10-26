import {URL,
  PHOTOS_ID,
  COMMENTS_ID,
  NUMBER_OF_POSTS,
  MINIMUM_NUMBER_OF_COMMENTS,
  MAXIMUM_NUMBER_OF_COMMENTS,
  MINIMUM_NUMBER_OF_LIKES,
  MAXIMUM_NUMBER_OF_LIKES,
  TEXT_MESSAGE,
  NAMES,
  DESCRIPTIONS} from './data.js';

import {getRandomInteger, getUniqNumberFromRange} from './util.js';

const getComments = () => {
  const comments = [];
  const numberOfComments = getRandomInteger(MINIMUM_NUMBER_OF_COMMENTS, MAXIMUM_NUMBER_OF_COMMENTS);
  for (let i=0; i < numberOfComments; i++){
    comments.push({
      id: getUniqNumberFromRange(1, 100000, COMMENTS_ID),
      avatar:`img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: TEXT_MESSAGE[getRandomInteger(0, 5)],
      name: NAMES[getRandomInteger(0, 5)]
    });
  }
  return comments;
};

const getPost= () => ({
  id: getUniqNumberFromRange(1, 25, PHOTOS_ID),
  url: `photos/${getUniqNumberFromRange(1, 25, URL)}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, 4)],
  likes: getRandomInteger(MINIMUM_NUMBER_OF_LIKES, MAXIMUM_NUMBER_OF_LIKES),
  comments: getComments()
});

const getPosts = () => {
  Array.from({length: NUMBER_OF_POSTS}, getPost);
};

getPosts();
