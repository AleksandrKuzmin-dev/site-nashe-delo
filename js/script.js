document.addEventListener('DOMContentLoaded', () => {

    function setMobileMenu(triggerSelector, modalSelector, modalShowSelector, closeSelector){
        const trigger = document.querySelector(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              body = document.querySelector('body');
        
        let isOpen = false;
    
        const openModal = () => {
            body.style.overflow = 'hidden';
            modal.classList.add(modalShowSelector);
        };
    
        const closeModal = () => {
            modal.classList.remove(modalShowSelector);
            body.style.overflow = 'unset';
        };
    
    
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal();
            };
        });
    
        trigger.addEventListener('click', openModal);
        close.addEventListener('click', closeModal);
    }

    setMobileMenu('.mobile-header__burger', '.mobile-header', 'mobile-header_show', '.mobile-header__burger-close');
})