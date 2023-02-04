let splitresult = document.querySelector('#splitresult')
let totalresult = document.querySelector('#totalresult')

// BILL
let billInput = document.querySelector('#bill')
billInput.onblur = function getBill() {
  bill = billInput.value
  console.log(bill)
  return bill
}


// SELECT TIP
let tipbutton = document.querySelectorAll('[data-tip]')

tipbutton.forEach((tip) => {
  return tip.addEventListener('click', event => console.log(tip.value))

  
})


//NUMBER OF PEOPLE
let numberofpeopleInput = document.querySelector('#numberofpeople')
numberofpeopleInput.onblur = function getPeople() {
  numberofpeople = numberofpeopleInput.value
  console.log(numberofpeople)
  return numberofpeople
}





