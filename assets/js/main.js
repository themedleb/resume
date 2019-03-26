function getAge(DOB) {
var today = new Date();
var birthDate = new Date(DOB);
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age = age - 1;
}
return age;
}
document.getElementById("age-value").innerHTML = getAge("8/31/1991");
