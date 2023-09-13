let selected = document.querySelector('.phrase');
selected.addEventListener('click', callback)
let button = document.querySelector('#myButton');
button.addEventListener('click', amogus)

function amogus() {
    selected.innerHTML = 'У меня, всё всегда с собой, летом и зимой, и мне пох!'
}
function callback() {
    alert('Если чё, я всегда готов, хо на мне огонь!')
}
