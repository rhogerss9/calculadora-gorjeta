let bill = 0
 let tipPercentage = 0
 let numberOfPeople = 0
 let buttonSelected = null
 
 let billInput = document.querySelector("#bill")
 billInput.addEventListener("input", receiveBillValue)
 
 let numberOfPeopleInput = document.querySelector("#people")
 numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)
 
 function receiveBillValue() {
     bill = billInput.valueAsNumber
 
     calculate()
 }
 
 function receiveNumberOfPeopleValue() {
     numberOfPeople = numberOfPeopleInput.valueAsNumber
 
     calculate()
 }
 
 function receiveTipPercentageValue(value) {
     tipPercentage = value / 100
 
     removeClassButtonSelected()
 
     document.querySelector("#custom-tip").value = ""
 
     buttonSelected = document.querySelector(`#button-${value}`)
     buttonSelected.classList.add("button-selected")
 
     calculate()
 }
 
 function receiveCustomTipPercentageValue() {
     tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
 
     removeClassButtonSelected()
 
     calculate()
 }
 
 function removeClassButtonSelected() {
 @@ -39,8 +51,12 @@
 
 function calculate() {
     if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
         console.log("é possível calcular")
     } else {
         console.log("Ainda não dá! Preencha tudo!")
         let tipAmountStrong = document.querySelector(".amount strong")
         let tipAmountPerson = bill * tipPercentage / numberOfPeople
         tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`
 
         let totalStrong = document.querySelector(".total strong")
         let totalPerson = (bill / numberOfPeople) + tipAmountPerson
         totalStrong.innerText = `$${totalPerson.toFixed(2)}`
     }
    }