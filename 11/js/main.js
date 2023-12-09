import { getPhotos } from './utils.js';
import { renderGallery } from './gallery.js';
import './form.js';
import './validate-form.js';

const posts = getPhotos();
renderGallery(posts);
