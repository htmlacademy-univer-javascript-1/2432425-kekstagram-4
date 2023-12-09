const form = document.querySelector('.img-upload__form');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const MAX_HASHTAGS_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const regularExpression = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const validateHashtagsLength = (value) => value.split(' ').length <= MAX_HASHTAGS_COUNT;

const validateHashtagsUniqueness = (value) => {
  const hashtagsUniqueness = value.toLowerCase().split(' ').filter((item) => Boolean(item.length));
  return hashtagsUniqueness.length === new Set(hashtagsUniqueness).size;
};

const validateHashtagFormat = (value) => {
  if (value === '') {
    return true;
  }
  else {
    return value.split(' ').every((hashtag) => regularExpression.test(hashtag));
  }
};

const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristine.addValidator(
  textHashtags,
  validateHashtagFormat,
  'Неподходящий хэштег'
);

pristine.addValidator(
  textHashtags,
  validateHashtagsLength,
  'Нельзя указывать больше 5 хэштегов'
);

pristine.addValidator(
  textHashtags,
  validateHashtagsUniqueness,
  'Повторяющийся хэштег'
);

pristine.addValidator(
  textDescription,
  validateDescription,
  'Длина  комментария не должна превышать 140 символов'
);

form.addEventListener('submit', (evt) => {
  const valid = pristine.validate();
  if (valid) {
    return true;
  }
  else {
    evt.preventDefault();
  }
});
