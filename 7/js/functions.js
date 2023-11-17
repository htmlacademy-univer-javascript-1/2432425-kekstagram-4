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
