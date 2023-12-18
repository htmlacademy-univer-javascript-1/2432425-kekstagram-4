import { sendData, getData } from './api.js';
import { closeFileForm, setOnFormSubmit } from './form.js';
import { renderGallery } from './gallery.js';
import { showAlert } from './utils.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

setOnFormSubmit (async (data) => {
  try {
    await sendData(data);
    closeFileForm();
    showSuccessMessage();
  } catch (err) {
    showErrorMessage();
  }
});

const loadPictures = async () => {
  try {
    renderGallery(await getData());
  } catch (err) {
    showAlert(err.message);
  }
};

loadPictures();
