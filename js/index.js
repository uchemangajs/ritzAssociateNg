"use strict"
const $navUl = document.querySelector('[nav-ul');
const $navCloseBtn = document.querySelector('[nav-close-btn]');
const $menuNav = document.querySelector('[menu-nav]');
const $barBtn = document.querySelector('[bar-btn]');

$navCloseBtn.addEventListener('click', () => $menuNav.classList.add('hide'));

$menuNav.addEventListener('click', () => $menuNav.classList.add('hide'));

function toggleMenu (e) {
    if($menuNav.classList.contains('hide')){
       $menuNav.classList.remove('hide'); 
    }else{

        $menuNav.classList.add('hide');
      console.log('togleissue')

        
      }
       
}

$barBtn.addEventListener('click', toggleMenu);


var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


const selectModel = document.getElementById('model-list');
const selectOption = selectModel.options;
// const selectSPV = document.getElementById('ranList');
// const SPVOptions = selectSPV.options;

// console.log(selectOption);
// switch(selectOption) {
//   case selectOption[1]:
//    selectOption[1].addEventListener('click', document.location.href='../html/car-lease.html');
// }


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
  for(let i = 0; i < selectOption.length; i++){
    console.log(selectOption[i].value)
     
        if( selectOption[1].selected) {
          document.location.href='../html/car-lease.html';
          break;}

          if (selectOption[2].selected){
               document.location.href='../html/suv-lease.html';
              return;
             };

             if (selectOption[3].selected){
                 document.location.href='../html/bus-lease.html';
                 return;
                };
            
                if (selectOption[4].selected){
                 document.location.href='../html/van-lease.html';
                 return;
               };

               if (selectOption[5].selected){
                document.location.href='../html/special-purpose.html';
                return;
              };

              if (selectOption[6].selected){
                document.location.href='../html/special-purpose.html';
                return;
              };

              if (selectOption[7].selected){
                document.location.href='../html/special-purpose.html';
                return;
              };
               }
  
              //  for(let i = 0; i < SPVOptions.length; i++){
              //   console.log(SPVOptions[i].value)
                 
              //        if( selectOption[1].selected) {
              //          document.location.href='../html/special-purpose.html';
              //          break;}
            
              //          if (selectOption[2].selected){
              //               document.location.href='../html/special-purpose.html';
              //              return;
              //            };
            
              //             if (selectOption[3].selected){
              //                document.location.href='../html/contact-us.html';
              //                 return;
              //                };
                        
                    //         if (selectOption[4].selected){
                    //          document.location.href='../html/van-lease.html';
                    //          return;
                    //        };
                           //}

})
