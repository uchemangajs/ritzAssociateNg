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