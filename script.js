let getInputData = document.getElementById('inputText');
let getInvalids = document.querySelector('#err');

// function getting data in input field
let calculate = (number) => getInputData.value += number;

// function clear in the input field
let clr = () => getInputData.value = "";

// function delete in the input field
let del = () => getInputData.value = getInputData.value.slice(0, -1);

// evaluating calculation and trow error if not valid operation
let Result = () => {
  try {
    getInputData.value = eval(getInputData.value);
  } catch (err) {
    getInvalids.innerText += "Not Valid Oparation";

    console.log(getInvalids)
    // alert("Not Valid Oparation");
    getInputData.value = ""
    getInvalids.remove.innerHTML;
  }
}