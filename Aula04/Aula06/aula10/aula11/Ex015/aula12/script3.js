function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
   var res = document.getElementById(`res`)
   if ( fano.value.length == 0 ||(fano.value) > ano){
    window.alert(`[ Erro] verifique os dados e tente novamente!`)
   }else{
      var fsex = document.getElementsByName(`radsex`)
      var idade = ano- Number(fano.value)
      res.innerHTML =  ` idade calculada ${idade}`
      var genero = ''
      var  img = document.createElement(`img`)
      img.setAttribute('id', 'foto')
        if ( fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')

            }else if (idade < 50 ){
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else{
                //adulto
                img.setAttribute('src', 'velhohomem.png')

           
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.png')

            }else if (idade < 50 ){
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else{   
                //adulto
                img.setAttribute('src','mulhervelha.png')

            
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` é uma ${genero} com ${idade} anos `
        res.appendChild(img)
      
   }
   


}