const overlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeForm = document.querySelector('.img-upload__cancel');
const fileInput = document.querySelector('.img-upload__input');
const imageForm = document.querySelector('.img-upload__form');
const hashTag = imageForm.querySelector('.text__hashtags');
const comment = imageForm.querySelector('.text__description');

const openFileForm = () => {
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
};

const closeFileForm = () => {
  if (!(document.activeElement === hashTag || document.activeElement === comment)) {
    imageForm.reset();
    fileInput.value = '';
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

function onDocumentKeydown (evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFileForm();
  }
}

closeForm.addEventListener('click', () => {
  closeFileForm();
});

uploadFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  openFileForm();
});
