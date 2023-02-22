var btn = document.querySelector('#button')
var screen = document.querySelector('.off')
var clock = document.querySelector('.clock')
var icons = document.querySelector('.screen_bottom')
var arrow = document.querySelector('.arrow')
var screenON = false

function screen_on_off() {
    screenON = !screenON
    if (screenON) {
        screen.style.opacity = '0'
        screen.style.transition = '1s 0.5s'
        clock.style.opacity = '1'
        clock.style.transform = 'translate(0%)'
        clock.style.transition = 'all 0.5s 0.8s'
        icons.style.opacity = '1'
        icons.style.transform = 'translate(0%)'
        icons.style.transition = 'all 0.5s 0.8s'
        arrow.style.opacity = '0'
    } else {
        screen.style.opacity = '1'
        screen.style.transition = '0.4s 0.5s'
        clock.style.opacity = '0'
        clock.style.transform = 'translate(100%)'
        clock.style.transition = '0s 0.6s'
        icons.style.opacity = '0'
        icons.style.transform = 'translateY(18%)'
        icons.style.transition = '0s 0.6s'
    }
}