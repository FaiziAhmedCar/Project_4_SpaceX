
const btn = document.getElementById(`menu-btn`)
const overlay = document.getElementsByClassName(`overlay`)[0]
const menu= document.getElementById(`mobile-menu`)

btn.addEventListener(`click`, ()=>{
    btn.classList.toggle(`open`)
    overlay.classList.toggle(`overlay-show`)
    document.body.classList.toggle(`stop-scrolling`)
    menu.classList.toggle(`show-mobile-menu`)
})

