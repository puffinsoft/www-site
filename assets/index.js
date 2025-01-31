import { CountUp } from './countUp.min.js'

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);
document.body.style.position = "fixed"
document.body.style.overflowY = "scroll"

$('#title1').animate({ opacity: 1 }, 2000);
$(background).css('filter', 'brightness(1)')

setTimeout(function () {

    new TxtAnime("#title2", {
        effect: 'txt-an-3',
        repeat: false
    })

    setTimeout(() => {
        title2.style.visibility = "visible"
    }, 100)

    setTimeout(() => {
        $(logo).animate({ opacity: 1 }, 1000);

        document.body.style.position = "unset"
        document.body.style.overflowY = "auto"
    }, 1500)
}, 500)






AOS.init({
    startEvent: 'load',
    once: true
})

document.addEventListener('aos:in:users', ({ detail }) => {
    new CountUp('users', 1000000).start();
});

document.addEventListener('aos:in:stars', ({ detail }) => {
    new CountUp('stars', 1000).start();
});
