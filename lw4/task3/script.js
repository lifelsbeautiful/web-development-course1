Array.prototype.forEachRight = function (EachRight) {
  var array = this;
  for (var i = array.length - 1; i >= 0; i--) {
    EachRight(array[i], i, array);
  }
};