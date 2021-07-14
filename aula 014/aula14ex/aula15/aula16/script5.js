function tabuada(){
    nu = document.getElementById(`txtn`)
    let tab = document.getElementById (`setab`)
if (nu.value.lenght == 0){
    window.alert (` por favor digite um numero`)
}else {
    let  n = Number(nu.value)
    let c = 1
    tab.innerHTML = ``
    while ( c <= 10){
        let item = document.createElement(`option`)
        item.text = ` ${n} x ${c} = ${n*c} `
        item.value = ` tab ${c}`
        tab.appendChild(item)
        c++
    }

}



}