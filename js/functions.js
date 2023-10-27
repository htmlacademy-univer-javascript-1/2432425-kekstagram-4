const checkLength = (str, length) => str.length <= length;

checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function checkPalindrome(str) {
  str = str.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < str.length / 2; i++) {
    const j = str.length - 1 - i;
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');
checkPalindrome('Лёша на полке клопа нашёл ');

//Функция, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит
const convertToMinutes = (arr) => ((+arr[0] * 60) + +arr[1]);

const checkTime = (start, end, startOfMeeting, duration) => {
  const timeOfStart = start.split(':');
  const timeOfEnd = end.split(':');
  const timeOfStartOfMeeting = startOfMeeting.split(':');

  const timeOfStartMinutes = convertToMinutes(timeOfStart);
  const timeOfEndMinutes = convertToMinutes(timeOfEnd);
  const timeOfStartOfMeetingMinutes  = convertToMinutes(timeOfStartOfMeeting);

  return timeOfStartOfMeetingMinutes >= timeOfStartMinutes && timeOfStartOfMeetingMinutes + duration <= timeOfEndMinutes;
};

checkTime('08:00', '17:30', '14:00', 90);
checkTime('8:0', '10:0', '8:0', 120);
checkTime('08:00', '14:30', '14:00', 90);
checkTime('14:00', '17:30', '08:0', 90);
checkTime('8:00', '17:30', '08:00', 900);
