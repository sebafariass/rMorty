import axios from "axios";

class Personajes {
    //constructor con toda la info necesaria
    constructor(nombre, id, genero, especies, estado, imagen) {

        this.nombre = nombre
        this.id = id
        this.genero = genero
        this.especies = especies
        this.estado = estado
        this.imagen = imagen

    }
}

const rmorty = (() => {
    
    return new Promise(async (resolve, reject) => {  //funcion que retorna una promesa 
        //llamar a la api
        try {
            //constante valor de api
            const baseUrl = await axios.get("https://rickandmortyapi.com/api/character");// const que tiene api
           //aqui guardo datos obtenidos 
            let datos = baseUrl.data.results
            let personajes = [] //var vacia para guardar info de array data q obtengo de api
            datos.forEach(e => {
                //se busca la info necesaria mediante valores de la propiedad

                let personaje = (new Personajes(e.name, e.id, e.gender,  e.species, e.status, e.image))
                personajes.push(personaje)
            });
            // recibo info de api 
            resolve(personajes);

        } catch (error) { // error en promesa
            reject(`Algo ha salido mal, intentalo nuevamente ${error}`)
        }

        
    })
})();

export default rmorty