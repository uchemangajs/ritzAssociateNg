"use strict"
const sliderDiv = document.getElementsByClassName('slider');



for(let i = 0; i < sliderDiv.length; i++){
 let bookingLink = sliderDiv[i].querySelector('[booking-link]');
let bookingForm = sliderDiv[i].querySelector('[booking-form-div]');

 bookingLink.addEventListener('click', () => { bookingForm.classList.toggle("collapse");

(function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('user_KxoKDWu1ownLLptlCQI8O');
        })();
    
    
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        console.log('SUCCESS!'); location.reload();
                    }, function(error) {
                        console.log('FAILED...', error);
                    })
//                .then(function(){location.reload})
                
            });
        }
                                                  
                                              
                                              
                                              
// bookingForm.innerHTML = `
//
//
//
//<div class="container">
//    <form id="contact-form">
//        <input type="hidden" name="contact_number">
//        
//        <div class="row">
//            
//            
//            <div class="col-75">
//        <label>Name</label>
//        <input type="text" name="user_name">
//        <label>Vehicle Name(as shown on top left corner)</label>
//        <input type="text" name="user_email">
//        </div>
//        </div>
//        <div class="row">
//        <div class="col-25">
//        <label>Phone</label>
//        <input type="telephone" name="user_email">
//        </div>
//        </div>
//       <div class="row">
//       <div class="col-75">
//        <label>Please describe your Takeoff-point, Destination and Date-of-Trip and Return date below</label>
//        <textarea name="message" placeholder="Takeoff Point:
//Destination:
//Date of Trip:
//Return Date:
//
//
//        " style="height: 5rem; "
//        ></textarea>
//       </div>
//   </div>
//<input name="btn" value="send" type="submit" />
//
//        
//    </form>
//    </div>`
 
        



                                             
                                             
                                             });
   
   
}