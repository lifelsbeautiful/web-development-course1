var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEachRight(function (arr) {
  arr.reverse();
  alert(arr);
});