// claculate Tip
const eachElement = document.getElementById("each");
const totalTipElement = document.getElementById("totalTip");

function claculateTip() {
    const billAmt = document.getElementById("billamt").value;
    const serviceQual = document.getElementById("serviceQual").value;
    const numofPeople = document.getElementById("peopleamt").value;

  // validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  // check to see if the input is empty or less than or equal to 1
  if (numofPeople === "" || numofPeople <= 1) {
    numofPeople = 1;
    eachElement.style.display = "none";
  } else {
    eachElement.style.display = "block";
  }

  // Claculate Tip
  let total = (billAmt * serviceQual) / numofPeople;
  total = Math.round(total);

//   Display the tip 
totalTipElement.style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount on load
totalTipElement.style.display = "none";
eachElement.style.display = "none";

// click to call function
document.getElementById("calculate").onclick = function () {
  claculateTip();
};
