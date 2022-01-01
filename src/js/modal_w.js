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

            clearInterval(modalTimerId); // коли юзер натисне на модалку швидше за таймер то вона сама вже не буде показуватись
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

    const modalTimerId = setTimeout(openModal, 3000);


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            removeEventListener('scroll', showModalByScroll); // для того щоб при скролі в самий низ модалка тільки раз показувалась
        }
    }

    window.addEventListener('scroll', showModalByScroll);
});