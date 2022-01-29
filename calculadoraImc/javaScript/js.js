var calcular = document.querySelector('#calcular')
var imc = document.querySelector('#imc')
var imc1 = document.querySelector('#imc1')
var imc2 = document.querySelector('#imc2')
var imc3 = document.querySelector('#imc3')
var imc4 = document.querySelector('#imc4')
var imc5 = document.querySelector('#imc5')
var zerar = document.querySelector('#zerar')

calcular.addEventListener('click', function(){
    var metros = document.querySelector('#metros')
    var kilos = document.querySelector('#kilos')
    var m = metros.value
    var k = kilos.value
    var final = k / (m*m)
    
    imc.innerHTML = final
    imc.style.cssText = 'color: red;'
    
    if(final < 18.5){
        imc1.style.backgroundColor = 'red'
        imc2.style.backgroundColor = 'white'
        imc3.style.backgroundColor = 'white'
        imc4.style.backgroundColor = 'white'
        imc5.style.backgroundColor = 'white'
    }
    if(final>=18.5 && final<=24.9){
        imc2.style.backgroundColor = 'green'
        imc1.style.backgroundColor = 'white'
        imc3.style.backgroundColor = 'white'
        imc4.style.backgroundColor = 'white'
        imc5.style.backgroundColor = 'white'
    }
    if(final>=25.0 && final<=29.9){
        imc3.style.backgroundColor = 'yellow'
        imc1.style.backgroundColor = 'white'
        imc2.style.backgroundColor = 'white'
        imc4.style.backgroundColor = 'white'
        imc5.style.backgroundColor = 'white'
    }
    if(final>=30.0 && final<=39.9){
        imc4.style.backgroundColor = 'red'
        imc1.style.backgroundColor = 'white'
        imc2.style.backgroundColor = 'white'
        imc3.style.backgroundColor = 'white'
        imc5.style.backgroundColor = 'white'
    }
    if(final>=40.0){
        imc5.style.backgroundColor = 'red'
        imc1.style.backgroundColor = 'white'
        imc2.style.backgroundColor = 'white'
        imc3.style.backgroundColor = 'white'
        imc4.style.backgroundColor = 'white'
    }
    
})

zerar.addEventListener('click',function(){
    document.location.reload()
})