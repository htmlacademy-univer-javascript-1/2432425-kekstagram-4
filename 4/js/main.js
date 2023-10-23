import {getPost, NUMBER_OF_POSTS} from './data.js';

const getPosts = () => {
  Array.from({length: NUMBER_OF_POSTS}, getPost);
};

getPosts();
