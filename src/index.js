import './style.scss'

let subscribe = document.querySelector('.subscribe')
let errorMesage = document.querySelector('#error_message') 
let validateBtn = document.querySelector('#btn')
let icon = document.querySelector('#icon_error')

function validateEmail() {
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   let email = document.querySelector('#email')
   
   if (reg.test(email.value) === false) {
      subscribe.style.border = '0.5px solid red'
      errorMesage.style.visibility = 'visible'
      icon.style.visibility = 'visible'
   } else {
      subscribe.style.border = '0.5px solid hsl(0, 39%, 85%)'
      errorMesage.style.visibility = 'hidden'
      icon.style.visibility = 'hidden'
   }
}
validateBtn.addEventListener('click', validateEmail)