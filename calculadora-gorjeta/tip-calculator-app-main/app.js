const inValor = document.querySelector('#inValor')
const porcenCustom = document.querySelector('#porcenCustom')
const inPessoas = document.querySelector('#inPessoas')
const button = document.querySelector('#button')
const outPerson = document.getElementsByClassName('outPerson')
const outTotal = document.getElementsByClassName('outTotal')

button.addEventListener('click', ()=>{
    let numero = Number(inValor.value)
    let pessoas = Number(inValor.value)
    if (numero === 0 ) {
        inValor.style.borderColor = 'red';
        var mensageError = document.getElementById('error')
        mensageError.textContent = "Digite um valor válido"
        inValor.focus()
       
        return
    }else  if (pessoas === 0 ) {
        alert("Digite um valor válido")
        inPessoas.focus()
        inPessoas.style.borderColor = 'red';
        return
    }
 })

const resetar = document.getElementById('resetar')    

resetar.addEventListener('click', ()=> {
    inPessoas.value = ''
    inValor.value = ''
    outPerson.value = ''
    outTotal.value = ''

})