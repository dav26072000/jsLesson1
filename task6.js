// Uppercase the first character
function ucFirst(str) {
  if (typeof str === "string") {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  } else {
    return false;
  }
}
console.log(ucFirst("bob"));
// Check for spam
function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam("bob "));
// Truncate the text

function truncate(str, maxlength) {
  console.log(str.length);
  if (str.length > maxlength) {
    str = str.slice(maxlength) + "...";
    return str;
  } else {
    return false;
  }
}
console.log(truncate("lorem dsdas dsadas dsad", 10));
