const getPhotosCount = () => 25;

const getIdsNum = function() {
  return {
    MIN: 1,
    MAX: 25
  };
};

const getUrlsNum = function() {
  return {
    MIN: 1,
    MAX: 25
  };
};

const getAvatarIdsNum = function() {
  return {
    MIN: 1,
    MAX: 6,
  };
};

const getLikesCount = function() {
  return {
    MIN: 15,
    MAX: 200,
  };
};

const getDescriptions = () => [
  'Тут должна была быть ваша реклама.',
  'Настроение — сложная штука. То оно есть, а то его нет.',
  'Я просто выгляжу как лось, а в душе я бабочка.',
  'Вот так всегда: для кого-то балласт, а для кого-то сокровище.',
  'От твоего взгляда моё сердце дрожит, как пустой холодильник.'
];

const getCommentSentences = () => [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getCommentatorsNames = () => [
  'Алексей',
  'Андрей',
  'Александр',
  'Яна',
  'Регина',
  'Татьяна'
];

export {getPhotosCount, getIdsNum, getUrlsNum, getAvatarIdsNum, getLikesCount, getDescriptions, getCommentSentences, getCommentatorsNames};
