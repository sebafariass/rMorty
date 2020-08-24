//  Bienvenidos al nuevo Hello World! programadores!
import rmorty from './Rickandmorty'
import $ from 'jquery'



//funncion q imprime informacion 
rmorty.then((personajes) => {
    //llamado a traves de id para ingresar datos
    const personaje_inicial = document.getElementById('personajes')
    //funcion a iterar valores de la propiedad
    personajes.forEach(element => {

         /* templete donde se manda la info a mostrar */
        personaje_inicial.innerHTML += 
        `
        
        
        <div class="card m-3 card__personajes">
          <img id="${element.id}" src="${element.imagen}" class="card-img-top imagen" alt="image" >
          <div class="card-body ${element.id}">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.genero}</p>
            <p class="card-text"><small class="text-muted">${element.especies}</small></p>
            <p class="card-text"><small class="text-muted">${element.estado}</small></p>
          </div>
        </div>`
        
    });
    
    $('.imagen').click((e)=>{
       $(`.${e.target.id}`).css('display','block')
    });
    console.log(personajes)

}).catch((error) => console.log(error))
