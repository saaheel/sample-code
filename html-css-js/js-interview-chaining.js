function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }


var addSix = createBase(6);
addSix(10);
addSix(21);

console.log(addSix(10));
