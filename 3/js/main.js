const TEXT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Алексей',
  'Андрей',
  'Александр',
  'Яна',
  'Регина',
  'Татьяна'
];

const DESCRIPTION = [
  'Тут должна была быть ваша реклама.',
  'Настроение — сложная штука. То оно есть, а то его нет.',
  'Я просто выгляжу как лось, а в душе я бабочка.',
  'Вот так всегда: для кого-то балласт, а для кого-то сокровище.',
  'От твоего взгляда моё сердце дрожит, как пустой холодильник.'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getUniqNumberFromRange (min, max, array) {
  let currentValue = getRandomInteger(min, max);
  if (array.length >= (max - min + 1)) {
    return null;
  }
  while (array.includes(currentValue)) {
    currentValue = getRandomInteger(min, max);
  }
  array.push(currentValue);
  return currentValue;
}

const url = [];
const photoId = [];
const commentId = [];

function getComments () {
  const comments = [];
  const quantity = getRandomInteger(1, 30);
  for (let i=0; i < quantity; i++){
    comments.push({
      id: getUniqNumberFromRange(1, 100000, commentId),
      avatar:`img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: TEXT_MESSAGE[getRandomInteger(0, 5)],
      name: NAMES[getRandomInteger(0, 5)]
    });
  }
  return comments;
}

function getPost(){
  return {
    id: getUniqNumberFromRange(1, 25, photoId),
    url: `photos/${getUniqNumberFromRange(1, 25, url)}.jpg`,
    description: DESCRIPTION[getRandomInteger(0, 4)],
    likes: getRandomInteger(15, 200),
    comments: getComments()
  };
}

const posts = Array.from({length: 25}, getPost);
