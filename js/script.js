const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  });


const initialButton = document.getElementById("initialButton");
const returnButton = document.getElementById("returnButton");

const hiddenBlocks = document.querySelectorAll(".hiddenCart");

initialButton.addEventListener('click', function() {

  initialButton.style.display = 'none'
  returnButton.style.display = 'flex'

  if (window.innerWidth <= 1020) {
    for (let i = 0; i < 11; i++) {
      if(i == 3 || i >= 7) {
        document.querySelectorAll('.card')[i].style.display = 'none';
      }
    }
  } 
  else if (window.innerWidth > 1020) {
    for (let i = 8; i <= 11; i++) {
      document.querySelectorAll('.card')[i].style.display = 'none';
    }
  };
  
});


returnButton.addEventListener('click', function() {

  initialButton.style.display = 'flex'
  returnButton.style.display = 'none'

  if (window.innerWidth <= 1020) {
    for (let i = 0; i < 11; i++) {
      if(i == 3 || i >= 7) {
        document.querySelectorAll('.card')[i].style.display = 'flex';
      }
    }
  } 
  else if (window.innerWidth > 1020) {
    for (let i = 8; i <= 11; i++) {
      document.querySelectorAll('.card')[i].style.display = 'flex';
    }
  };
  
});