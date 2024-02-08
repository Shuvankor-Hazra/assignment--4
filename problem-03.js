function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Input should be an array!";
  }
  let newArray = [];
  for (const element of array) {
    if (typeof element === "number" && !isNaN(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(deleteInvalids( {num: [ 1 , 2 , 3 ]}));
