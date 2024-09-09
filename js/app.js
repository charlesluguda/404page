/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 3000,
})

sr.reveal(`.home_content`, {origin: 'top', delay: 400})
sr.reveal(`.home_image`, {origin: 'bottom', delay: 600})
sr.reveal(`.footer_content`, {origin: 'bottom', delay: 800})