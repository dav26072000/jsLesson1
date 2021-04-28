alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1 and 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1 then undefined
alert(null || (2 && 3) || 4); // 2 && 3 has preority then null || 3 || 4 = 3

// age task 1
function ageFunction(age) {
  if (age >= 14 && age <= 90) {
    console.log(true);
  } else {
    console.log(false);
  }
}
ageFunction();
// age task 2
function ageFunction2(age) {
  if (!(age >= 14 && age <= 90)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
ageFunction2();

// if task

if (-1 || 0) alert("first"); // -1 = true => true
if (-1 && 0) alert("second"); // 0 = false => false
if (null || (-1 && 1)) alert("third"); // -1 = true 1 = true => true

// Promt task with functions

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
