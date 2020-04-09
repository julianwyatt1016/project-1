//jshint esversion 6

//Req. 3b
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return avg;
};

arrAvg([2,3,5,7,9]);

//Req. 3c

let arrMax = (arr) => {
  let num = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > num) {
    num = arr[i];
  }
}
return num;
};

arrMax([2,3,5,7,9]);
