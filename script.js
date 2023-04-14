const calculateTip = (total, tip, people) => {
  return (total * tip) / people;
};

const calculateTotal = (total, tip, people) => {
  return (total * (1 + tip)) / people;
};

const calculate = (event) => {
  event.preventDefault();

  console.log("hello");
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
