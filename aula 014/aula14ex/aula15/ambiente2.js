 let nu = [1,2,3,4,5,6]
 nu.push(1)
 nu.sort()
 console.log(nu)
 console.log(`o valor tem ${nu.length} posicoes`)
 console.log(` o primeiro valor é ${nu [0]}`)
 let pos = nu.indexOf(8)
 if (pos == -1 ){
     console.log(` o valor nao foi encontrado!`)
 }else{   
     console.log(`o valor está na posicao ${pos}`)
 }


 
 /*
 console.log(nu)
 console.log( nu [0] )
 console.log(nu [1])
 console.log(nu [2])
 console.log(nu [3])
 console.log (nu [4])
 console.log(nu [5])
 */


 /*
 for ( let pos =0; pos < nu.length; pos++ ){
     console.log (` a posicao ${pos} tem valor ${nu[pos]}`)

 }
 */

 
