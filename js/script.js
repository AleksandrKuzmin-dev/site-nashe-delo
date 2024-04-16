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


function setDraggableFromOverflowAuto(scrollSelector) {

    scroll = document.querySelector(scrollSelector);
    let speed = 1.5; // Скорость скролла.
    if (!scroll) return;

    scroll.style.scrollBehavior = 'unset';
    scroll.style.paddingBottom = '10px';
    scroll.style.userSelect = 'none';

    let left = 0; 
    let drag = false;
    let coorX = 0; 

    scroll.addEventListener('mousedown', function(e) {
        drag = true;
        coorX = e.pageX - this.offsetLeft;
    });

    document.addEventListener('mouseup', function() {
        drag = false;
        left = scroll.scrollLeft;
    });

    scroll.addEventListener('mousemove', function(e) {
        if (drag) {
            this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX)*speed;
        };
    });
};

function setTabs(tabsSelector, activeTabSelector, contentSelector) {
    const tabsElements = document.querySelectorAll(tabsSelector),
          contentElements = document.querySelectorAll(contentSelector);

    let lastContent = contentElements[0];
    let lastTab = tabsElements[0];
    
    tabsElements.forEach((item, index) => {
        contentElements[index].classList.add('fadeOutFromNone');
        item.addEventListener('click', () => {
            
        lastContent.classList.add('none');
        lastTab.classList.remove(activeTabSelector.replace(/[.]/g, ''));
    
        tabsElements[index].classList.add(activeTabSelector.replace(/[.]/g, ''));
        contentElements[index].classList.remove('none');

        lastTab = tabsElements[index];
        lastContent = contentElements[index];

        });
    });
};

function setZoomGallery(imgSelector) {
    const triggers = document.querySelectorAll(imgSelector),
          modal = document.querySelector('.modal-gallery'),
          modalImg = document.querySelector('.modal-gallery__img'),
          body = document.querySelector('body');


    let isOpen = false;

    const showModal = () => {
        modal.classList.remove('none');
        isOpen = true;
        body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('none');
        isOpen = false;
        body.style.overflow = 'unset';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        };
    });

    modal.addEventListener('click', (e) => {
        closeModal();
    })

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const imgSrc = trigger.src;
            const altImg = trigger.alt;

            modalImg.src = imgSrc;
            modalImg.alt = altImg;
            
            showModal();
        });
    })   
}

function setDropDownCards(tabsSelector, activeTabSelector) {
    const tabsElements = document.querySelectorAll(tabsSelector)

    tabsElements.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle(activeTabSelector.replace(/[.]/g, ''))
        });
    });
};

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 75,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})


