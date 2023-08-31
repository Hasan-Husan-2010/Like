let a = document.querySelector('.a')
let aa = document.querySelector('.aa')
let h2 = document.querySelector('.h2')

a.addEventListener('click', function(){
    if (aa.classList.contains('ae')) {
        aa.classList.remove('ae')
    } else {
        aa.classList.add('ae')
    }
    if (h2.classList.contains('ae')) {
        h2.classList.remove('ae')
    } else {
        h2.classList.add('ae')
    }
})