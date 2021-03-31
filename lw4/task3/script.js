let array1 = [1, [2, 3, 4], 5];

function flatArray(arrayParam1) {
  if (typeof arrayParam1 === 'object') {
    let arrayAnswer = [];
    function isNumber(num) {
      if (typeof num == 'number') {
        arrayAnswer.push(num);
      }
    }
    if (typeof arrayParam1 == 'object') {
      for (let i = 0; i < arrayParam1.length; i++) {
        if (isNaN(arrayParam1[i]) === false) {
          isNumber(arrayParam1[i]);
        }

        if (typeof arrayParam1[i] == 'object' && arrayParam1[i] !== null) {
          let numArray = i;
          for (let i = 0; i < arrayParam1[numArray].length; i++) {
            isNumber(arrayParam1[numArray][i]);
          }
        }
      }
    }
    return arrayAnswer;
  }
  else {
    return "Вы передаете не массив";
  }
}