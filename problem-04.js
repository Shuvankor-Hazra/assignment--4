function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    obj.birthYear.toString().length !== 4 ||
    !obj.siteName
  ) {
    return "invalid";
  }
  let newPassword = "";
  for (let key in obj) {
    if (key === "siteName") {
      let site = obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
      newPassword = site + "#" + obj["name"] + "@" + obj["birthYear"];
    }
  }
  return newPassword;
}
// const person = { name: "kolimuddin", birthYear: 1999, siteName: "google"};
// const person = { name: "rahat", birthYear: 2002, siteName: "Facebook" };
const person = { name: "toky", birthYear: 200, siteName: "Facebook" };

console.log(password(person));
