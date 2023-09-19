// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let countYes = 0;
  let countNo = 0;
  let countMaybe = 0;

  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      countYes += 1;
    }
    else if (surveyData[i] === "No") {
      countNo += 1;
    }
    else if (surveyData[i] === "Maybe") {
      countMaybe += 1;
    }
  }

  outputEl.innerHTML = `Yes(${countYes}) No(${countNo}) Maybe(${countMaybe})`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  let count18under = 0;
  let count18to35 = 0;
  let count36to65 = 0;
  let countAbove65 = 0;

  for (let i = 0; i < ageData.length; i++) {
    if(ageData[i] < 18) {
      count18under += 1;
    }
    else if(ageData[i] >= 18 && ageData[i] < 36) {
      count18to35 += 1;
    }
    else if(ageData[i] >= 36 && ageData[i] <= 65){
      count36to65 += 1;
    }
    else if(ageData[i] > 65) {
      countAbove65 += 1;
    }
  }

  outputEl.innerHTML = `Under 18(${count18under}) 18 to 35(${count18to35}) 
  36 to 65(${count36to65}) Above 65(${countAbove65})`;
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  let countEven = 0;
  let countOdd = 0;

  for (let i = 0; i < numberData.length; i++) {
    if(numberData[i] % 2 === 0) {
      countEven += 1;
    }
    else {
      countOdd += 1;
    }
  }

  outputEl.innerHTML = `Even (${countEven}) Odd (${countOdd})`;
  console.log(numberData);
}
