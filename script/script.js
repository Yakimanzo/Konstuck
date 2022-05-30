// Add email validation script

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const INPUT = document.querySelector('input');

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
  if (validateEmail(INPUT.value)) INPUT.style.borderColor = '#00A4E5';
  else INPUT.style.borderColor = 'red';
}

INPUT.addEventListener('input', updateInput);







// Fix header while scrolling

let navbar = document.querySelector('#navbar');
let navbarH = document.querySelector('#navbar').clientHeight;



document.onscroll = function () {
    let scroll = window.scrollY;

    if(scroll > navbarH + 769) {
        navbar.classList.add('fixed');
        document.body.style.paddingTop = navbarH + 'px';
    }else{
      navbar.classList.remove('fixed');
      document.body.removeAttribute('style');
  }
}   
    


