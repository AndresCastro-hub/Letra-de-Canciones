import * as UI from './interfaz.js'

class API{
    constructor(artista,cancion){
        this.artista = artista
        this.cancion = cancion
    }

    consultarAPI(){
       
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
        .then(respuesta => respuesta.json() )
        .then( resultados => {

            if(resultados.lyrics){
                const {lyrics} = resultados
                UI.divResultado.textContent = lyrics
                UI.headingResultado.textContent = `Cancion: ${this.cancion} de ${this.artista}`
            }else{
                UI.divMensajes.textContent = 'La cancion no se pudo encontrar'
                UI.divMensajes.classList.add('error')

                setTimeout(() => {
                    UI.divMensajes.textContent = "";
                    UI.divMensajes.classList.remove('error')
                },3000)
            }
            
        })
    }
}

export default API