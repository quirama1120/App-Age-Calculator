export const inputYears = document.querySelector("#year");
export const inputMonth = document.querySelector("#month");
export const inputDay = document.querySelector("#day");
export const calculatedAgeButton = document.querySelector(".calculatingButton");

calculatedAgeButton.addEventListener("click", () => {
  const inputYearValue = inputYears.value;
  const inputMonthValue = inputMonth.value;
  const inputDayValue = inputDay.value;
  const inputArray = [inputYears, inputMonth, inputDay]
  let inputEmpty = false;
  let invalidInput = false;
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear();


  inputArray.forEach(input => {
    const label = input.previousElementSibling;
    const existingError = input.nextElementSibling;
    if(existingError && existingError.classList.contains("error__message")) {
      existingError.remove()
    }

    if(input.value.trim() === "") {
      input.classList.add("input__error")
      if(label) {
        label.classList.add("label__error")
      }
      inputEmpty = true;
      const error__message = document.createElement("p");
      error__message.textContent = "This field is required";
      error__message.classList.add("error__message");
      input.parentNode.appendChild(error__message)
    }
    else {
      input.classList.remove("input__error");
      if(label) {
        label.classList.remove("label__error");
      }
    }
  }) 
  
  if(inputYearValue > currentYear) {
    const existingError = inputYears.nextElementSibling;
    if(existingError && existingError.classList.contains("error__message")) {
      existingError.remove()
    }
    inputYears.classList.add("input__error")
    const label = inputYears.previousElementSibling;
    label.classList.add("label__error")
    const error__message = document.createElement("p");
    error__message.textContent = "Must be in the past";
    error__message.classList.add("error__message");
    inputYears.parentNode.appendChild(error__message)
    invalidInput = true;
  }

  if(inputMonthValue > 12) {
    const existingError = inputMonth.nextElementSibling;
    if(existingError && existingError.classList.contains("error__message")) {
      existingError.remove()
    }
    inputMonth.classList.add("input__error")
    const label = inputMonth.previousElementSibling;
    label.classList.add("label__error")
    const error__message = document.createElement("p");
    error__message.textContent = "Must be a valid month";
    error__message.classList.add("error__message");
    inputMonth.parentNode.appendChild(error__message)
    invalidInput = true;
  }

  if(inputDayValue > 31) {
    const existingError = inputDay.nextElementSibling;
    if(existingError && existingError.classList.contains("error__message")) {
      existingError.remove()
    }
    inputDay.classList.add("input__error")
    const label = inputDay.previousElementSibling;
    label.classList.add("label__error")
    const error__message = document.createElement("p");
    error__message.textContent = "Must be a valid day";
    error__message.classList.add("error__message");
    inputDay.parentNode.appendChild(error__message)
    invalidInput = true;
  }

  if(inputEmpty) {
    return;
  }

  if(invalidInput) {
    return;
  }

  let userBirthDay = new Date(
    inputYearValue,
    inputMonthValue - 1,
    inputDayValue
  );
  let currentlyDate = new Date();
  let userDateYearAge = currentlyDate.getFullYear() - userBirthDay.getFullYear();
  let userDateMonthAge;
  let userDateDayAge;

  //days
  if (
    currentlyDate.getDate() < userBirthDay.getDate() ||
    currentlyDate.getDate() === userBirthDay.getDate()
  ) {
    userDateDayAge = currentlyDate.getDate() - userBirthDay.getDate() + 30;
    document.querySelector(".result__day").innerHTML = userDateDayAge;
  } else {
    userDateDayAge = currentlyDate.getDate() - userBirthDay.getDate();
    document.querySelector(".result__day").innerHTML = userDateDayAge;
  }
  //months
  if (
    currentlyDate.getMonth() < userBirthDay.getMonth() ||
    currentlyDate.getMonth() === userBirthDay.getMonth()
  ) {
    userDateMonthAge = currentlyDate.getMonth() - userBirthDay.getMonth() + 12;
    document.querySelector(".result__month").innerHTML = userDateMonthAge;
  } else {
    userDateMonthAge = currentlyDate.getMonth() - userBirthDay.getMonth();
    document.querySelector(".result__month").innerHTML = userDateMonthAge;
  }
  //years
  if (
    currentlyDate.getMonth() < userBirthDay.getMonth() ||
    (currentlyDate.getMonth() === userBirthDay.getMonth() &&
      currentlyDate.getDate() < userBirthDay.getDate())
  ) {
    document.querySelector(".result__year").innerHTML = userDateYearAge -= 1;
  } else {
    document.querySelector(".result__year").innerHTML = userDateYearAge;
  }
})
