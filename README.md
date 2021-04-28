# its my home work

### I did it , I have no questions

---

![Drag Racing]("https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d4ca25043129.5633e58977854.png")

---

### some parts of my code

```javascript
function adminLogin(login, pass) {
  let log = true;
  if (login === "") {
    console.log("Canceled");
    log = false;
  } else if (login !== "Admin") {
    console.log("I dont know you");
    log = false;
  } else if (login === "Admin") {
    if (pass === "") {
      log = false;
      console.log("Canceled");
    } else if (pass !== "TheMaster") {
      log = false;
      console.log("Wrong password");
    }
  }
  if (log === true) {
    console.log("Welcome!!!!");
  }
}

adminLogin("Admin", "TheMaster");
```

---

```javascript
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
```

---

[my fb](https://www.facebook.com/david.matiasvili.5)
