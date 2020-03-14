
exports.min = function min(array) {


  if (Array.isArray(array) == false) { return 0; }
  let s = array[0];
  if (!array.length) return 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < s) s = array[i];
  }

  return s;
}

exports.max = function max(array) {



  if (Array.isArray(array) == false) { return 0; }
  let s = array[0];
  if (!array.length) return 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > s) s = array[i];
  }
  return s;
}

exports.avg = function avg(array) {
  let s = 0;

  if (Array.isArray(array) == false) { return 0; }
  if (!array.length) return 0;

  for (let i = 0; i < array.length; i++) {
    s = s + array[i];
  }
  return s / array.length;
}
