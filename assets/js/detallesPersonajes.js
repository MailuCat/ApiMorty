import Personajes from './personajes.js';

export default class DetallesPersonajes extends Personajes {
    constructor (id, name, species, gender, created, origin ){
        super (id)

        let _name = name;
        this.getName = () => _name
        this.setName = (nuevoName) => _name = nuevoName
        
        this._species = species;
        this._gender = gender;
        this._created = created;
        this._origin = origin;
        this._location = location;
        this._episode = episode;
    }
    
    get name (){
        return this.getName();
    }
    get status (){
        return this._status;
    }
    get species (){
        return this._species;
    }
    get gender (){
        return this._gender;
    }
    get created (){
        return this._created;
    }
    get origin (){
        return this._origin;
    }
    get location (){
        return this._location;
    }
    get episode (){
        return this._episode;
    }
    verFicha() {
        return   `
                <ul>
                    <li>id: ${this._id}</li>
                     <li>Nombre: ${this._name}</li>
                     <li>Especie: ${this._species}</li>
                     <li>${this._gender}</li>
                     <li>Creado: ${this._created}</li>
                     <li>Ubicación: ${this._location}</li>
                     <li>Episodios${this._episode}</li>
                </ul>`
    } 

   
}    
