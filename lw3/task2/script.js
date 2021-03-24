function isTimeRangesIntersect(arr1, arr2) {
  let result = [];

  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      result.push(elem);
    }
  }

  return result;
}

function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}
isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true