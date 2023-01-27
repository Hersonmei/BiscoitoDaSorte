const boxFront = document.querySelector('.box-front')
const boxBack = document.querySelector('.box-back')
const message = document.querySelector('.message')
const entireBiscuit = document.querySelector('.entire-biscuit')
const btn = document.querySelector('.btn')

const frases = [
    'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
    'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
    'Saber encontrar a alegria na alegria dos outros é o segredo da felicidade.',
    'A alegria de fazer o bem é a única felicidade verdadeira.',
    'Aquele que nunca viu a tristeza, nunca reconhecerá a alegria.',
    'A alegria não está nas coisas, está em nós.',
    'Deus nunca perturba a alegria dos seus filhos se não for para lhes preparar uma mais certa e maior.'
]

entireBiscuit.addEventListener('click', () => {
    boxFront.classList.toggle("none")
    boxBack.classList.toggle("none")

    message.innerText = frases[Math.floor(Math.random() * (frases.length - 0) + 0)]
})

btn.addEventListener('click', () => {
    boxFront.classList.toggle("none")
    boxBack.classList.toggle("none")
})