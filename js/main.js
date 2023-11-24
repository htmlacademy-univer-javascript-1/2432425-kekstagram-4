import { getPhotos } from './utils.js';
import { renderGallery } from './gallery.js';

const posts = getPhotos();
renderGallery(posts);
