var min_time = 0
var sec_time = 0
var mili_time = 0


function LoadLisntenes(){ 
    
    const start = document.querySelector('#start')
    const pause = document.querySelector('#pause')
    const reset = document.querySelector('#reset')
    const marcar = document.querySelector('#marcar')
    var intervalId

    start.style.display = "inline"
    start.addEventListener("click",function(){
        
        start.style.display = "none"
        pause.style.display = "inline"
        reset.style.display = "inline"
        marcar.style.display = "inline"
        intervalId = setInterval(function(){
            timerStart(),1
        })
    })
    pause.addEventListener("click",function(){
        clearInterval(intervalId)
        start.style.display = "inline"
        pause.style.display = "none"
        start.textContent = "Resume"

    })
    reset.addEventListener("click",function(){
        
        
        clearInterval(intervalId)
        timerReset()
        start.textContent = "start"
        start.style.display = "inline"
        pause.style.display = "none"
        reset.style.display = "none"
        marcar.style.display = "none"
        resetMarcador()
        
    })

    marcar.addEventListener('click',function(){
        addMarcador(`${min_time.toString().padStart(2,0)} : ${sec_time.toString().padStart(2,0)} : ${mili_time.toString().padStart(3,0)}`)
    })
    

    
}
function addMarcador(string){
    const tabela = document.querySelector('#tabelas')
    const linhas = tabela.querySelectorAll('div') 
    var div = document.createElement('div')
    div.innerHTML = `<span>${linhas.length + 1}º</span>    
                    <span>${string}</span>`
    tabela.append(div)

    // linhas.forEach(function(elem,index){
    //     console.log(index+" : "+elem.innerText)
    // })
}
function resetMarcador(){
    const tabela = document.querySelector('#tabelas')
    const linhas = tabela.querySelectorAll('div') 

    linhas.forEach(function(elem){
        elem.remove()
    })
}


function timerStart(){
    const min = document.querySelector('#min')
    const sec = document.querySelector('#sec')
    const mili = document.querySelector('#mili')
    crono()
    min.textContent = min_time.toString().padStart(2,0)
    sec.textContent = sec_time.toString().padStart(2,0)
    mili.textContent = mili_time.toString().padStart(3,0)
    
   
}
function timerReset(){
    const min = document.querySelector('#min')
    const sec = document.querySelector('#sec')
    const mili = document.querySelector('#mili')
    min_time = 0
    sec_time = 0 
    mili_time = 0
    min.textContent = min_time.toString().padStart(2,0)
    sec.textContent = sec_time.toString().padStart(2,0)
    mili.textContent = mili_time.toString().padStart(3,0)
}

function crono(){

    
    mili_time == 999 ? sec_time++ : false
    sec_time == 59 ? min_time++ : false
    mili_time < 999 ? mili_time++ : mili_time = 0
    sec_time >= 59  ? sec_time = 0: false 
    
    
}

window.addEventListener('load',LoadLisntenes)