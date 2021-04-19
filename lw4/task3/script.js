Array.prototype.forEachRight = function (callback) {
  var array = this;
  for (var i = array.length - 1; i >= 0; i--) {
    callback(array[i], i, array);
  }
};