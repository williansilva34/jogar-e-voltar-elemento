

var past = document.getElementById("past");

var divs = document.getElementsByTagName("div")


var caixa1  =document.getElementById("caixa1");

var caixa2= document.getElementById("caixa2")



const all = [...document.querySelectorAll(".curso")]


all.map((el)=>{


    el.addEventListener("click",(evt)=>{

        const curso = evt.target
        
        curso.classList.toggle("red")

    })


})

past.addEventListener("click",()=>{

    const selecionados= [...document.querySelectorAll(".red")]

    const naoselec = [...document.querySelectorAll(".curso:not(.red)")]


    naoselec.map((el)=>{


        caixa1.appendChild(el)
    
        


    })

    console.log(naoselec)
    
    selecionados.map((el)=>{

        caixa2.appendChild(el)

    })

})