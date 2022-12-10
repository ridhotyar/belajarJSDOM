const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
})

const newBtn = document.createElement('button')
const btnTxt = document.createTextNode('Created by JS')

newBtn.appendChild(btnTxt)
newBtn.setAttribute('type','button')
btn.after(newBtn)

newBtn.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 +1 )
    const g = Math.round(Math.random() * 255 +1 )
    const b = Math.round(Math.random() * 255 +1 )
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')' 
})

const sRed = document.querySelector('input[name=RED')
sRed.addEventListener('input', function(){
    const r = sRed.value
    const g = sGreen.value
    const b = sBlue.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')' 
})

const sGreen = document.querySelector('input[name=GREEN')
sGreen.addEventListener('input', function(){
    const r = sRed.value
    const g = sGreen.value
    const b = sBlue.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')' 
})

const sBlue = document.querySelector('input[name=BLUE')
sBlue.addEventListener('input', function(){
    const r = sRed.value
    const g = sGreen.value
    const b = sBlue.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')' 
})

document.body.addEventListener('mousemove', function(e){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientY / window.innerHeight) * 255)

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)' 
})