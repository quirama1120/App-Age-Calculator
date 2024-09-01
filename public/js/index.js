export const inputYears = document.querySelector("#year");
export const inputMonth = document.querySelector("#month");
export const inputDay = document.querySelector("#day");
export const calculatedAgeButton = document.querySelector(".calculatingButton");

calculatedAgeButton.addEventListener("click", () => {
  const inputYearValue = inputYears.value;
  const inputMonthValue = inputMonth.value;
  const inputDayValue = inputDay.value;
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
