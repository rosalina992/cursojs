function contar(){
    let ini = document.getElementById(`txtin`)
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)
    
    if (ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0  ){     
    window.alert (`[ERRO!] Faltam dados!`)
}else {
    res.innerHTML = `Contando:`
    let i = Number(ini.value)
    let f = Number (fim.value)
    let p = Number(passo.value)
    if (p += 0){
        window.alert(` Passo inválido só considera  passo 1`)
        p = 1
    }
    if ( i < f){    
    /* Contagem crescente*/ 
    for ( let c = 1; c <= f ; c += p ){
        res.innerHTML += `${c} \u{1F449}`
    }
}else {
        /* Contagem decrescente*/ 
        for ( let c =1; c>= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }

    }

    res.innerHTML += `\u{1F3C1}`
}

    

}  