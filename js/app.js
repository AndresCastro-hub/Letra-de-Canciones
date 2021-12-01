import * as UI from './interfaz.js'
import API from './api.js'

console.log(UI)

UI.formularioBuscar.addEventListener('submit', searchCancion)

function searchCancion(e){
    e.preventDefault()

    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if(artista === "" || cancion === ""){
        UI.divMensajes.textContent = 'Debe completar todos los campos';
        UI.divMensajes.classList.add('error')


        setTimeout(() => {
            UI.divMensajes.textContent = ''
            UI.divMensajes.classList.remove('error')
        }, 4000);

        return;
    }

   const busqueda = new API (artista,cancion)

   busqueda.consultarAPI()
}