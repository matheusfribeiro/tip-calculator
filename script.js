let billInput = document.querySelector('#bill')
let numberofpeopleInput = document.querySelector('#numberofpeople')
let tips = document.querySelectorAll('.tips')
let tipPerson = document.querySelector('#tipPerson')
let totalPerson = document.querySelector('#totalPerson')
let tipCustom = document.querySelector('#tipcustom')
let resetButton = document.querySelector('#reset')
let spanError = document.querySelector('#spanError')

tipPerson.innerHTML = '$' + (0).toFixed(2)
totalPerson.innerHTML = '$' + (0).toFixed(2)

// BILL
billInput.value = '0'
billInput.oninput = getBill

let bill = 0
function getBill() {
  bill = parseFloat(billInput.value)
  calculate()
}

// SELECT TIP

let tipPerc = 0.15

tips.forEach(function(item) {
  item.addEventListener('click', clickFunc)
})

function clickFunc (e) {
  tips.forEach(function(item) {
    item.classList.remove('active')

    if(e.target.innerHTML == item.innerHTML) {
      item.classList.add('active')
      tipPerc = parseFloat(item.innerHTML) / 100
    }  
  })

  calculate()
}

tipCustom.oninput = customFunc

 function customFunc () {
  tipPerc = parseFloat(tipCustom.value / 100) 

  tips.forEach(function(item) {
    item.classList.remove('active')
  })
  calculate()
 }

//NUMBER OF PEOPLE
numberofpeopleInput.value = '1'
numberofpeopleInput.oninput = getPeople

let numberofpeople = 1
function getPeople() {
  numberofpeople = parseFloat(numberofpeopleInput.value)
  calculate()

  if (numberofpeople < 1) {
    numberofpeopleInput.classList.add('error')
    spanError.style.display = 'flex'
  } else {
    numberofpeopleInput.classList.remove('error')
    spanError.style.display = 'none'
    calculate()
  }
}

//CALCULATE
function calculate() {
  if (numberofpeople >= 1) {
    let tipAmount = (bill * tipPerc) / numberofpeople
    let total = (bill + tipAmount) / numberofpeople
    tipPerson.innerHTML = '$' + tipAmount.toFixed(2)
    totalPerson.innerHTML = '$' + total.toFixed(2)
  }
}

//RESET

resetButton.onclick = reset

function reset() {
  tipPerson.innerHTML = '$' + (0).toFixed(2)
  totalPerson.innerHTML = '$' + (0).toFixed(2)
  billInput.value = '0'
  getBill()
  numberofpeopleInput.value = 1
  getPeople()
  tipCustom.value = '0'
}
