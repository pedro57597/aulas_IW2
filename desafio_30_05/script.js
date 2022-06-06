document.getElementById("calcular").onclick = function(){
    var ano = document.getElementById('ano')
    console.log(ano.value)
    var radios = document.getElementsByName("sexo")
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value)
            var sexo = radios[i].value
        }
    }

    console.log(sexo)
    var idade = 2022 - ano.value
    console.log('Sua idade é...' + idade)
    console.log('Você é do sexo...' + sexo)

    if (sexo == "Masculino"){
        if(idade <= 5){
            image.src = "./imgs/masculino1.png"}
        
        if(idade>=6 && idade<= 10){
            image.src = "./imgs/masculino2.png"
        }

        if(idade>=11 && idade<=20){
            image.src = "./imgs/masculino3.png"
        }

        if(idade>=21){
            image.src = "./imgs/masculino4.png"
        }
    }

    else{
        if(idade <= 5){
            image.src = "./imgs/feminino1.png"}
        
        if(idade>=6 && idade<= 10){
            image.src = "./imgs/feminino2.png"
        }

        if(idade>=11 && idade<=20){
            image.src = "./imgs/feminino3.png"
        }

        if(idade>=21){
            image.src = "./imgs/feminino4.png"
        }
    }

    textoresultado.innerHTML = "Você é do sexo " + sexo + " e tem " + idade + " anos de idade"

}
