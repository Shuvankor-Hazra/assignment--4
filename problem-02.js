function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const lastChar = name[name.length - 1].toLowerCase();
  const goodChar = ["a", "e", "i", "o", "o", "y", "w"];
  if (goodChar.includes(lastChar)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
console.log(checkName("199"));
