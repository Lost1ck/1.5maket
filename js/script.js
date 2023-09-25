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
  const serviceCards = document.querySelectorAll('.services-card');
  const mediaQuery769 = window.matchMedia('(min-width: 768px)');
  const mediaQuery1121 = window.matchMedia('(min-width: 1120px)');

initialButton.onclick = function(el) {

  if(mediaQuery769.matches) {
      initialButton.style.display = 'none';
      returnButton.style.display = 'flex';
      hiddenBlocks.forEach(block => this.classList.toggle('hodden', true));
      toggleCards(false);
  } else {
    initialButton.style.display = 'flex';
    returnButton.style.display = 'none';
    hiddenBlocks.forEach(block => this.classList.toggle('hodden', false));
    toggleCards(true);
  }
}

function toggleCards() {
   
    const displayValue = show ? 'flex' : 'none';
}


  
  // // Создаем объекты MediaQueryList для двух медиазапросов
  
  // // Добавляем слушатели события change к объектам MediaQueryList
  // mediaQuery769.addListener(handleMediaChange);
  // mediaQuery1121.addListener(handleMediaChange);
  
  // // Инициализация медиазапросов при загрузке страницы
  // handleMediaChange(mediaQuery769);
  // handleMediaChange(mediaQuery1121);
  
  // function handleMediaChange(mediaQuery) {
  //   if (mediaQuery.matches) {
  //     // Медиазапрос срабатывает
  //     initialButton.style.display = 'none';
  //     returnButton.style.display = 'flex';
  //     hiddenBlocks.forEach(block => block.classList.toggle('hidden', true));
  //     toggleServiceCards(false);
  //   } else {
  //     // Медиазапрос не срабатывает
  //     initialButton.style.display = 'flex';
  //     returnButton.style.display = 'none';
  //     hiddenBlocks.forEach(block => block.classList.toggle('hidden', false));
  //     toggleServiceCards(true);
  //   }
  // }
  
  // function toggleServiceCards(show) {
  //   const displayValue = show ? 'flex' : 'none';
  
  //   if (window.innerWidth <= 1120) {
  //     for (let i = 0; i < 11; i++) {
  //       if (i == 3 || i >= 7) {
  //         serviceCards[i].style.display = displayValue;
  //       }
  //     }
  //   } else if (window.innerWidth > 1020) {
  //     for (let i = 8; i <= 11; i++) {
  //       serviceCards[i].style.display = displayValue;
  //     }
  //   }
  // }
  