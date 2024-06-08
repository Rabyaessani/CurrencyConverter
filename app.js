BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");
const fromFlag = document.querySelector(".from img");
const toFlag = document.querySelector(".To img");
const msg = document.querySelector(".msg");
const ExchangeCurrCode = document.querySelector(".ExchangeCurrCode");




const UpdateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amountVal === "" || amountVal < 0 || isNaN(amountVal)) {
      alert("Enter the correct amount");
      amountVal = 1;
      amount.value = "1";
    }
    
    
    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // console.log(rate);
    let FinalAmount = amountVal * rate;
    // console.log(FinalAmount);
    msg.innerText = `${amountVal} ${fromCurr.value} = ${FinalAmount.toFixed(3)} ${
      toCurr.value
    }`;
  };

window.addEventListener("load", () => {
  UpdateExchangeRate();
});

for (let select of dropdown) {
  for (Currcodes in countryList) {
    // console.log(countryList[Currcodes].name)
    let newOption = document.createElement("option");

    newOption.innerText = countryList[Currcodes].name;
    newOption.value = Currcodes;
   

    if (select.name === "From" && Currcodes === "USD") {
      newOption.selected = "Selected";
    } else if (select.name === "To" && Currcodes === "PKR") {
      newOption.selected = "Selected";
    }

    select.append(newOption);
    // console.log(fromCurr.value)

    select.addEventListener("change", (event) => {
      //   console.log("Event",event); // Logs the event object
      //   console.log("event.target",event.target); // Logs the select element that triggered the event
      //   console.log("event.target.val",event.target.value); // Logs the selected value

      UpdateFlag(event.target);
      UpdateExchangeRate();
    });
  }
}

ExchangeCurrCode.addEventListener("click", (event) => {
  event.preventDefault();
    ExchangeFlag();
  
});

const UpdateFlag = (element) => {
  let currCode = element.value;
  let CountryCode = countryList[currCode].code;
  let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  UpdateExchangeRate();
  

  // console.log(fromCurr.value,toCurr.value.toLowerCase())
});

const ExchangeFlag = () => {
  let NewFromCurr = toCurr.value;
  let NewToCurr = fromCurr.value;
  fromCurr.value = NewFromCurr;
  toCurr.value = NewToCurr;

  // Swap the flag images
  let tempSrc = fromFlag.src;
  fromFlag.src = toFlag.src;
  toFlag.src = tempSrc;

  UpdateExchangeRate()


};


