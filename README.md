# its my home work

### I did it , I have no questions

---

![Drag Racing](https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

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
