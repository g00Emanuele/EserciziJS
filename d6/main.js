let title = document.getElementById('titolo');

function changeTitle(){
    title.innerText = 'Apple Store';
}

function changeTitleReverse(){
    title.innerText = 'Smartphone Store';
}


let sfondo = document.getElementsByTagName('body')[0]

function changeBackground(){
    sfondo.classList.add('change-bkr')
}


let indirizzo = document.getElementById('address')

function changeAddress(){
    indirizzo.innerText = 'via Roma, 2, Trento'
}

let sfondoLink = document.getElementsByTagName('a')
console.log(sfondoLink)

function changeLink(){
    for (const iterator of sfondoLink) {
        iterator.classList.add('change-link')
    }
}


let visibile = document.getElementsByTagName('img')

function changeVisibility(){
    for (const iterator of visibile) {
        iterator.classList.add('invisibility')
    }
}


    
function randomColor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}

function randomColorPrices() {
    let prices = document.getElementsByClassName('price')
    for ( iterator of prices ) {
        iterator.style.color = randomColor()
    }
}