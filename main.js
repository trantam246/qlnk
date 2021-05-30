function load(element, classEffect) {
    window.addEventListener('load', () => {
        element.classList.add(classEffect)
    })
}
function scrollItems(element, classEffect) {
    if (element && classEffect) {
        if (window.pageYOffset === 0 && (window.innerHeight) > (element.getBoundingClientRect().top)) {
            load(element, classEffect);
            // console.log(window.outHeight)
            // console.log(element.offsetTop)
        }
        else {
            window.addEventListener('scroll', () => {
                if (window.innerHeight > element.getBoundingClientRect().top) {
                    element.classList.add(classEffect)
                }
            })
        }
    }

}

function animationSectionFive() {
    let widgetItems = document.querySelectorAll('.widget__item')
    let sectionFiveHeading = document.querySelector('.section-five__heading');
    let sectionFiveTitle = document.querySelector('.section-five__title');

    scrollItems(sectionFiveHeading, 'go-to-up')
    scrollItems(sectionFiveTitle, 'go-to-down')
    for (let i = 0; i < widgetItems.length; i++) {
        scrollItems(widgetItems[i], 'go-to-up')
    }
}
animationSectionFive()

function fixedMenu() {
    let menu = document.querySelector('.header__menu')
    const posMenu = menu.getBoundingClientRect().top

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > posMenu) {
            menu.classList.add('header__menu--fixed')
        }
        else {
            menu.classList.remove('header__menu--fixed')
        }
    })
}
fixedMenu();

function showModal(item, form) {
    let itemClick = document.querySelector(item)
    let modalOverlay = document.querySelector(".modal__overlay")
    let modalForm = document.querySelector(form)
    let modal = document.querySelector(".modal")
    let html = document.querySelector("html")

    console.log(item)
    if (itemClick) {
        itemClick.addEventListener("click", function () {
        modalOverlay.style.display = "block";
        modalForm.style.display = "block"

        modal.style.display = "flex"

        html.style.overflowY = "hidden";
    })
    }
    
    modalOverlay.addEventListener("click", function () {
        console.log("click")
        modalForm.style.display = "none"
        modalOverlay.style.display = "none"
        modal.style.display = "none"
        html.style.overflowY = "visible";
    })
}
showModal(".btn-register", ".modal__inner-register")
showModal(".btn-login", ".modal__inner-login")
function switchModal(current, currentModal, newModal) {
    let currentElement = document.querySelector(current)
    let currentModalElement = document.querySelector(currentModal)
    let newModalElement = document.querySelector(newModal)
    currentElement.addEventListener("click", function () {
        currentModalElement.style.display = "none"
        newModalElement.style.display = "block"
    })
}
switchModal(".switch-login", ".modal__inner-register", ".modal__inner-login")
switchModal(".switch-register", ".modal__inner-login", ".modal__inner-register")