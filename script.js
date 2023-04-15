const calculateTip = (total, tip, people) => {
  const splitTip = ((total * (tip / 100)) / people).toFixed(2);
  return `$${splitTip}`;
};

const calculateSplitTotal = (total, tip, people) => {
  const splitTotal = ((total * (1 + tip / 100)) / people).toFixed(2);
  return `$${splitTotal}`;
};

const calculate = (event) => {
  event.preventDefault();

  const bill = +document.getElementById("bill").value;
  const tipPercentage = +document.getElementsByClassName("active")[0].value;
  const people = +document.getElementById("people").value;

  if (people === 0) {
    document.getElementsByClassName("error")[0].style.display = "block";
  } else {
    document.getElementsByClassName("error")[0].style.display = "none";
  }

  if (bill && tipPercentage && people) {
    const splitTip = calculateTip(bill, tipPercentage, people);
    const splitTotal = calculateSplitTotal(bill, tipPercentage, people);
    document.getElementById("split-tip").innerHTML = splitTip;
    document.getElementById("split-total").innerHTML = splitTotal;
  }
};

const tipHandler = (event) => {
  event.preventDefault();

  const selectedTip = document.getElementsByClassName("active");

  Array.from(selectedTip).forEach((element) => {
    element.classList.remove("active");
  });

  event.target.classList.toggle("active");
};

const reset = (event) => {
  event.preventDefault();

  const selectedTip = document.getElementsByClassName("active");

  Array.from(selectedTip).forEach((element) => {
    element.classList.remove("active");
  });

  document.getElementById("bill").value = null;
  document.getElementById("tip").value = null;
  document.getElementById("people").value = null;
  document.getElementById("split-tip").innerHTML = "$0.00";
  document.getElementById("split-total").innerHTML = "$0.00";
};
