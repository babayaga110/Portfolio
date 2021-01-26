$(function () {
    let headerContent = document.querySelector('.header-content')
    let nav = document.querySelector('.site-nav')
    let headerCue = document.querySelector('.header-cue')
    let portfolio =document.querySelector('#about')
    let navHeight =nav.scrollHeight

    function moveHeader() {
        let top = window.pageYOffset
        let mainOnTop = portfolio.getBoundingClientRect().top - navHeight

        mainOnTop < 0
        ? nav.classList.add('in-body')
        : nav.classList.remove('in-body')

        let currentCuePosition = headerContent.getBoundingClientRect().top

        currentCuePosition < 0
            ? headerCue.classList.add('d-none')  
            : headerCue.classList.remove('d-none')

            headerContent.style.transform = `translateY(-${top / 1.5}px)`
            headerContent.style.opacity = 1 - Math.max(top / (window.innerHeight * 0.2), 0)

        window.requestAnimationFrame(moveHeader)
    }

    window.requestAnimationFrame(moveHeader)
})

