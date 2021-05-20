"use strict";

//TASK 1
function convertFahrToCelsius(F) {
  let final = "";
  let inputNumber = typeof F;
  if (typeof F === "string" || typeof F === "number") {
    let newNumber = Number(F);
    let C = ((newNumber - 32) * 5) / 9;
    let celcius = C.toFixed(4);
    return celcius;
  }
  if (toString.call(F) === "[object Array]") {
    let arrayValue = JSON.stringify(F);
    return (final = `${arrayValue} is not a valid number but an Array.`);
  }
  if (F instanceof Object) {
    let objectData = JSON.stringify(F);
    return (final = `${objectData} is not a valid number but an object.`);
  } else {
    final = `${JSON.stringify(F)} is not a valid number but an ${inputNumber}.`;
    return final;
  }
}
console.log(convertFahrToCelsius(20));
console.log(convertFahrToCelsius("DAVID"));
console.log(convertFahrToCelsius([1, 2, 3]));

//TASK 2
function checkYuGiOh(n) {
  try {
    let arr = [...new Array(Number(n))].map((_value, index) => {
      index++;
      const [_2, _3, _5] = ["yu", "gi", "oh"];

      if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
        return _2 + "-" + _3 + "-" + _5;
      //check for  multiple factors
      else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
      else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
      else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;
      //check for one multiple
      else if (index % 2 === 0) return _2;
      else if (index % 3 === 0) return _3;
      else if (index % 5 === 0) return _5;
      //return the number
      return index;
    });
    return arr;
  } catch (err) {
    return `'${n}' is an invalid parameter`;
  }
}
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
