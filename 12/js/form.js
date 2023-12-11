import { disableSlider, onFilterChange, createSlider } from './effects.js';

const overlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeForm = document.querySelector('.img-upload__cancel');
const fileInput = document.querySelector('.img-upload__input');
const imageForm = document.querySelector('.img-upload__form');
const hashTag = imageForm.querySelector('.text__hashtags');
const comment = imageForm.querySelector('.text__description');

const buttonSmaller = imageForm.querySelector('.scale__control--smaller');
const buttonBigger = imageForm.querySelector('.scale__control--bigger');
const scaleValue = imageForm.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsField = document.querySelector('.img-upload__effects');

const Zoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const openFileForm = () => {
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
  createSlider();
};

const closeFileForm = () => {
  if (!(document.activeElement === hashTag || document.activeElement === comment)) {
    imageForm.reset();
    fileInput.value = '';
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    disableSlider();
  }
};

function onDocumentKeydown (evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFileForm();
  }
}

const changeZoom = (coefficient) => {
  const size = parseInt(scaleValue.value, 10) + coefficient * Zoom.STEP;

  scaleValue.value = `${size}%`;
  imagePreview.style.transform = `scale(${size / 100})`;
};

closeForm.addEventListener('click', () => {
  closeFileForm();
});

uploadFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  openFileForm();
});

buttonSmaller.addEventListener('click', (evt) => {
  evt.preventDefault();

  const coefficient = -1;

  if (parseInt(scaleValue.value, 10) > Zoom.MIN) {
    changeZoom(coefficient);
  }
});

effectsField.addEventListener('change', onFilterChange);

buttonBigger.addEventListener('click', (evt) => {
  evt.preventDefault();

  const coefficient = 1;

  if (parseInt(scaleValue.value, 10) < Zoom.MAX) {
    changeZoom(coefficient);
  }
});
