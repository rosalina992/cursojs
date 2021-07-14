var agora = new Date()
var diasem = agora.getDay()
diasem = 7

/*  os dias de semana o js conta da seguinte forma
0-Domingo
1- Segunda
2- Terça
3 - Quarta
4 - Quinta
5 - Sexta
*/ 

console.log(diasem)
switch(diasem){
    case 0:
        console.log(`é Domingo!`)
        break
        case 1:
            console.log(` é Segunda!`)
            break
            case 2:
                console.log(` é Terça!`)
                break
                case 3:
                    console.log(` é Quarta!`)
                    break
                    
                    case 4:
                        console.log(` é Quinta!`)
                        break
                        case 5:
                            console.log(` é Sexta!`)
                            break

                            case 6:
                            console.log(` é Sábado!`)
                            break

                            default:
                                console.log(`Dia de semana  inválido!`)

}