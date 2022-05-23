var botao = document.getElementById('botao')
var lamp  = document.getElementById('lampada')

//console.log(botao)

botao.onclick = function(){
    //alert('clicado!')
        if(botao.value == 'Acender'){
            lamp.src = './img/acesa.jpg'
            botao.value = 'apagar'
            botao.innerHTML = 'Apagar'
        } 
        else{
            lamp.src = './img/apagada.jpg'
            botao.value = 'Acender'
            botao.innerHTML = 'Acender'
        } 
}


 