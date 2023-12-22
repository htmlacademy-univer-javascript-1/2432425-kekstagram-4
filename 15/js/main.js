import { sendData, getData } from './api.js';
import { closeFileForm, setOnFormSubmit } from './form.js';
import { renderGallery } from './gallery.js';
import { showAlert } from './utils.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { debounce } from './utils.js';
import { initFilter, getFilteredPictures } from './filter.js';

const debounceRenderGallery = debounce(renderGallery);

getData()
  .then((requestData) => {
    initFilter(requestData, debounceRenderGallery);
    renderGallery(getFilteredPictures());
  })
  .catch((err) => {
    showAlert(err.message);
  });

setOnFormSubmit (async (data) => {
  try {
    await sendData(data);
    closeFileForm();
    showSuccessMessage();
  } catch (err) {
    showErrorMessage();
  }
});
