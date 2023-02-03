let bill = document.querySelector('#bill')
let numberofpeople = document.querySelector('#numberofpeople')

let tipbutton = document.querySelectorAll('[data-gorjeta]')

tipbutton.forEach((tip) => {
  tip.addEventListener('click', event => console.log(tip.value))
})











//document.querySelector('.tips').addEventListener('click', event => console.log(event.target.closest('.tipbutton').value))


