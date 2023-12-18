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
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
