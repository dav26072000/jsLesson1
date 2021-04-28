alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1 and 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1 then undefined
alert(null || (2 && 3) || 4); // 2 && 3 has preority then null || 3 || 4 = 3

function ageFunction(age) {
  if (age >= 14 && age <= 90) {
    console.log(true);
  } else {
    console.log(false);
  }
}

ageFunction();
