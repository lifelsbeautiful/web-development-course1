String.prototype.countCoincidence = function (elem) {
  let a = -1;
  let result = 0;
  while ((a = this.indexOf(elem, a + 1)) != -1) {
    result++;
  }
  return result;
};