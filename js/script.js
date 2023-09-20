const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  });


  // document.querySelector('hide').onclick=function(){


  //   let hide = document.querySelectorAll('hide').style.display;

  //   if(hide.style.display === 'flex') {
  //     style.display = 'none'
  //   } else {
  //     style.display = 'flex'
  //   }
  // };



const initialButton = document.getElementById("initialButton");
const returnButton = document.getElementById("returnButton");
const hiddenBlocks = document.getElementById("hiddenBlocks");


initialButton.addEventListener("click", function () {
    initialButton.style.display = "none";
    hiddenBlocks.style.display = "none";


    returnButton.style.display = "flex";
});

returnButton.addEventListener("click", function () {

    returnButton.style.display = "none";

    initialButton.style.display = "flex";
    hiddenBlocks.style.display = "flex";
});