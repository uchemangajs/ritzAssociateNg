"use strict"
const sliderDiv = document.getElementsByClassName('slider');



for(let i = 0; i < sliderDiv.length; i++){
 let bookingLink = sliderDiv[i].querySelector('[booking-link]');
let bookingForm = sliderDiv[i].querySelector('[booking-form-div]');

 bookingLink.addEventListener('click', () => { bookingForm.classList.toggle("collapse");});
   
   
}