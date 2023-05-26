'use strict';

const markRead = document.querySelector('.mark-read');
const unread = document.querySelectorAll('.unread');
const num = document.querySelector('.num');



unread.forEach(read =>{
  read.addEventListener('click',()=>{
        read.classList.remove('seen');
        read.classList.remove('dot');
      if(num.textContent > 0){
        num.textContent--;
      }else{
        return 0;
      }
  });
});





markRead.addEventListener('click',()=>{
  unread.forEach(unreads =>{
    unreads.classList.remove('seen');
    unreads.classList.remove('dot');

  });
  num.textContent = 0;
})