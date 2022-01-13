var agora = new Date()
var diaSem = agora.getDay()

diaSem = 3
/*
0 = segunda
1 = terca
2 = quarta
3 = quinta
4 = sexta
5 = sabado
6 = domingo
*/
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log("segunda")
        break
    case 1:
        console.log("terca")
        break
    case 2:
        console.log("quarta")
        break
    case 3:
        console.log("quinta")
        break
    case 4:
        console.log("sexta")
        break
    case 5: 
        console.log("sabado")
        break
    case 6:
        console.log("domingo")
        break
    default:
        console.log("Dia invalido!")
        break
}