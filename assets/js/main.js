import DetallesPersonajes from './detallesPersonajes.js';

let llamadoPersonajes = (() => {
    let mostrar = document.querySelector('.resultados');
    let datosTotales;
    let urlBase = 'https://rickandmortyapi.com/api/character';
    
    
    
    let request = async () =>{
        try {
            let responde = await fetch(urlBase);
            datosTotales= await responde.json();
            return datosTotales;
        } 
        catch (error) {
           console.error(error); 
        }
    };

   
    
    let personajeID = async (id) =>{
        try{
            let respuesta = await fetch(`${urlBase}/${id}`);
            let infoPersonaje = await respuesta.json();
            let cartoon = new DetallesPersonajes(infoPersonaje.id, infoPersonaje.name, infoPersonaje.species, infoPersonaje.gender, infoPersonaje.origin);
        
            document.querySelector(`#identificacion-${infoPersonaje.id}`).innerHTML = cartoon.verFicha();
        } catch (error) {
            console.error(error);
        }
    };


    return{
        mostrarUsuario: async () =>{
            try{
                let dataUsers = await request((`${urlBase}/character`));
                console.log(dataUsers);
                dataUsers.results.forEach((element) => {
                    mostrar.innerHTML += `
                    <div col-12 col-sm-12 col-md-6 col-lg-3col-xl-3>
                        <img src="${element.image}" alt="${element.id} ">
                        <ul>
                            <li><span>${element.name}</span></li>
                            <li><span>${element.species}</span></li>
                        </ul>
                    </div>`
                 ;
            });
            }
            catch (error) {
                console.error(error);
            }
        },
        mostrarCantidad: () => {
            
            let spiner = document.querySelector('.spinner-border');
            spiner.style.display = "none";
            
            cantidadPersonajes.innerHTML = `${datosTotales.lenght}`;
     
        }
    }
    
})();
llamadoPersonajes.mostrarUsuario();
llamadoPersonajes.mostrarCantidad();
llamadoPersonajes.verFicha();