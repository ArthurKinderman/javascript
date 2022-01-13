function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` agr sao ${hora} `
    if ( hora >= 0 && hora < 12){
        img.src = 'caio.png.jpeg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        img.src = 'jade.png.jpeg'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'caio.png.jpeg'
        document.body.style.background = '#515154'
    }
}




