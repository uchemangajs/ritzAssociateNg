"use strict"
const bookingLink = document.querySelector('[booking-link]');
const bookingForm = document.querySelector('[booking-form]');

bookingLink.addEventListener('click', () => {bookingForm.classList.toggle("hide")
console.log('hit')});