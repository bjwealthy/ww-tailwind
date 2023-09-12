const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')

    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

function showYear() {
    let currentYear = new Date().getFullYear()
    document.getElementById('yearField').innerHTML = currentYear   
}
function toggle(){
    const mob = document.getElementById('mobile-memu')
    
}
document.addEventListener('DOMContentLoaded', showYear)

document.addEventListener('DOMContentLoaded', initApp)