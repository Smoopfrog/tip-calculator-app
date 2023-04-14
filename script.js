const calculateTip = (total, tip, people) => {
  return (total * tip) / people;
};

const calculateTotal = (total, tip, people) => {
  return (total * (1 + tip)) / people;
};

const calculate = (event) => {
  event.preventDefault();

  console.log('hello')
};

const tipHandler = (event) => {
  event.preventDefault();

  const selectedTip = document.getElementsByClassName("active");

  Array.from(selectedTip).forEach((element) => {
    element.classList.remove("active");
  });

  event.target.classList.toggle("active");
};