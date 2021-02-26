//global variables
const slider = document.querySelector('.slider')
const cadastro = document.getElementById('cadastro')
const login = document.getElementById('login')

function handleSubmit(e) {
    e.preventDefault()
}
function prevent(e) {
    e.preventDefault()
}

// document.querySelectorAll('.slider-dots li').forEach(function(indicator, index){
//     indicator.addEventListener('click', function(){
//         slider.style.transform = `translate(${index * -25}%)`
//     })
// })


function swap(){

    if(cadastro.style.display == 'none') {
        cadastro.style.display = 'block'
    } else {
        cadastro.style.display = 'none'
    }

    if(login.style.display == 'block') {
        login.style.display = 'none'
    } else {
        login.style.display = 'block'
    }
}