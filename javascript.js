//q1
let nome= prompt("Qual seu nome?")
const exibe_nome = document.querySelector('#nome')
exibe_nome.innerHTML = `Bem-vindo, ${nome}`
//q2
const btn_onoff = document.querySelector('#btn-onoff')
const lampada = document.querySelector('#lamp')
const icone_onoff = document.querySelector("#icon-onoff")
const body =document.querySelector('body')

let ligado= true
btn_onoff.addEventListener('click', ()=>{
    if(ligado){
        lampada.src="./imgs/pic_bulboff.gif"
        icone_onoff.innerHTML='toggle_off'
        body.style.backgroundColor="black"
        body.style.color='white'
        icone_onoff.style.color='white'
        ligado = false
    }else{
        lampada.src= "./imgs/lamp.lig.png"
        icone_onoff.innerHTML='toggle_on'
        body.style.backgroundColor="white"
        body.style.color='black'
        icone_onoff.style.color='black'
        ligado=true
    }
})
//Q3
const ipt_senha= document.querySelector('#senha')
const btn_olho= document.querySelector('#btn-olho')
const icn_olho = document.querySelector('#icon-olho')
let visivel = false
btn_olho.addEventListener('click',()=>{
    if(visivel){
        ipt_senha.type='password'
        icn_olho.innerHTML='visibility_off'
        visivel=false
    }else{
        ipt_senha.type='text'
        icn_olho.innerHTML='visibility'
        visivel =true
    }

})
//q4
const ipt_senha_repete =document.querySelector('#senha_repete')
const span_erro = document.querySelector('#erro')
ipt_senha_repete.addEventListener('input', ()=>{
    if(ipt_senha.value != ipt_senha_repete.value){
        ipt_senha_repete.style.outline= '1px solid red'
        span_erro.style.display='block'
        span_erro.innerHTML='As senhas são diferentes'

    }else{
        span_erro.style.display='none'
        ipt_senha_repete.style.outline ='revert'
    }
})
//q5
const val1 = document.querySelector('#num1')
const val2= document.querySelector('#num2')
const result= document.querySelector('#resultado')

function somar(){
     res = Number(val1.value) + Number(val2.value)
    result.innerHTML= res

}
function subtrair(){
    res = Number(val1.value) - Number(val2.value)
   result.innerHTML= res

}
function multiplicar(){
    res = Number(val1.value) * Number(val2.value)
   result.innerHTML= res

}
function dividir(){
    try{
        if(Number(val2.value)== 0){
            throw Error("Não pode dividir por zero")
        }else{
            res=Number(val1.value) / Number(val2.value)
            result.innerHTML= res
        }
    }catch (error){
        result.innerHTML= error
    }
   

}

