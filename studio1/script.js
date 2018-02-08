"use strict";

console.log("reading"); //testing js

//store form fields in variables
var results = document.getElementById("results");
var letterContent = document.getElementById("letterContent");
var opening = document.getElementById("opening");
var closing = document.getElementById("closing");
var body = document.getElementsByTagName("body");

//capture submit event for form
document.f.onsubmit = processForm;
//reset the form
document.f.onreset = resetForm;

//processing form function
function processForm() {
  var userName = document.f.userName.value;
  var noun1 = document.f.noun1.value;
  var noun2 = document.f.noun2.value;
  var noun3 = document.f.noun3.value;
  var number1 = document.f.number1.value;
  var number2 = document.f.number2.value;
  var number3 = document.f.number3.value;
  var date1 = document.f.date1.value;
  var stationName = document.f.stationName.value;
  var fraction = document.f.fraction.value;
  var measurementTime = document.f.measurementTime.value;

  document.body.style.backgroundImage = "url('../images/studio1-bg2.jpg')"; //changes background to invitation letter

  //writes letter based on input
  opening.innerHTML = "Dear " + userName + ",";

  letterContent.innerHTML = "We are pleased to inform you that you have been accepted to Hogwarts School of Witchcraft and Wizardry.<br> <br>Enclosed is a list of equipments, including " + noun1 +
    " and " + noun2 + ",which will be required for your courses. All items of the supply list can be purchased at Diagon Valley, totaling at " + number1 +
    " galleons. We await your arrival at Hogwarts School of Witchcraft and Wizardry no later than " + date1 +
    ".<br>  <br>To get to school, please use the enclosed travel ticket and make your way to the " + stationName +
    "Station, entering through Platform " + number2 + " " + fraction + " to take the Hogwarts Express.<br> <br>Students shall be required to report to the Chamber of " + noun3 +
    " upon arrival. Your term will begin " + number3 + " " + measurementTime + " after your arrival. We look forward to to receiving you as part of the new generation of Hogwarts Heritage.<br>";

  closing.innerHTML = "Yours Sincerely, <br> <strong>Minerva McGonagall</strong><br> Deputy Headmistress";

  //stops from reloading;
  return false;

}

console.log("resetting");

function resetForm() {
  opening.innerHTML = "";
  letterContent.innerHTML = "";
  closing.innerHTML = "";
  document.body.style.backgroundImage = "url('../images/studio1-bg.jpg')"
  //resets to empty form
}
