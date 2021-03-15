'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const open = document.querySelector('.open__btn'), 
          open2 = document.querySelector('.open__btn_2'),
          modalW = document.querySelector('.modal'),
          close = document.querySelector('.close__btn');
    


        function openModal() {
            // modalW.classList.add('show', 'fade_modal');
            // modalW.classList.remove('hide');
            modalW.classList.toggle('show');
            
            document.body.style.overflow = 'hidden'; // аби сти не прокручувалось
        }
        open.addEventListener('click', openModal);
        open2.addEventListener('click', openModal);


        function closeModal() {
                // modalW.classList.add('hide');
                // modalW.classList.remove('show', 'fade_modal');
                modalW.classList.toggle('show');
    
                document.body.style.overflow = '';// аби сти прокручувалось
        }
        close.addEventListener('click', closeModal);
        
        

// how click to body 
    modalW.addEventListener('click', (e) => {
        if (e.target === modalW) {
            closeModal();
        }
    });

// how click to esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalW.classList.contains('show')) { // && modalW.classList.contains('show') - це озн що ми провіряємо чи закрита модалка щоб вона не відкривала при нажатті на esc
            closeModal();
        }
    });
});