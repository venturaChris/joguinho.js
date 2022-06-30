let personagem = document.querySelector ("#personagem")
let quadrado = document.querySelector ("#quadrado")

function pular (){
    if(personagem.classList != "animar"){
        personagem.classList.add("animar")
    }
    
    setTimeout(function(){
        personagem.classList.remove("animar") 
    },500)  
}
    var testarcolisao = setInterval (function(){

        var topopersonagem = parseInt(
            window.getComputedStyle(personagem).getPropertyValue("top")
            )
        var esquerdaquadrado = parseInt(
            window.getComputedStyle(quadrado).     getPropertyValue("left"))

        if (esquerdaquadrado < 20 && esquerdaquadrado > 0 && topopersonagem >= 130) {
            quadrado.style.animation = "none"
            quadrado.style.display = "none"
            alert('voce perdeu, recarregue a pagina')
        }

    }, 10)