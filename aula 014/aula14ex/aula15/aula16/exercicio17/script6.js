let nu = document.getElementById(`txtn`)
let lista = document.getElementById(`flista`)
let res = document.getElementById(`res`)
let valores = []
function isNumero(n){
    if ()
    if(Number(n)>= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }

}
function inlista (n,l){
    if (l.indexOf(Number(n)) != -1){
        return true

    }else{
        return false
    }

}
function adicionar(){
    if (isNumero(nu.value) && inlista(nu.value.valores)){
       window.alert(`tudo ok!`)
   } else{
     window.alert(`valor invalido ou ja encontrado na lista`)
   }

}
    
   