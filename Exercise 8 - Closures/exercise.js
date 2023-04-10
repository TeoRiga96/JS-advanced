function multiplyByTwo(value) {
  let number = 2;
  function inner () {
   let mult = value * number;
   return console.log(mult);
  }
  return inner;
}

multiplyByTwo(4)();