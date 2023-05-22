/* Ejericio 1
Escribe una funición en formato arrow function que tome como entrada un objeto y devuelva una lista con sus propiedades. 
Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.  */
let person = {
    name: "Lucas",
    age: 27,
    profession: "Developer",
    }

const valores = (obj) => Object.values(obj);
console.log(valores(person))


const persona = {
	nombre: 'Agustin',
    saludar: function(){
        console.log('Hola ' + this.nombre);
    },
	decirNombre:() => {
		console.log(this.nombre);
		},
 
};
//persona.saludar()
//persona.decirNombre()

function findMaxNumber() {
    console.log(arguments);
    return Math.max(...arguments);
}
//console.log(findMaxNumber(5,10,3,20,100));

function tradicional(){
}
const arrowFn = () =>{
}
//console.log(tradicional.prototype);
//console.log(arrowFn.prototype)

const Usuarios = (nombre) => {
    this.name = name
}
//const usuario1 = new Usuarios("Luis");

/* function myFuncion(a,a,a){
    console.log(a)
}
console.log(myFuncion(4,5,6))

const myArrowFun = (a,a,a) => console.log(a)
console.log(myArrowFun(4,5,6)) */

// ejercico 3
class InvertirCadena {
    constructor(cadenaInvertir) {
        this.cadenaInvertir = cadenaInvertir;
    }

    invertir(){
        try{
            if(this.cadenaInvertir == ""){
                throw new SyntaxError(" la cadena está vacía")
            }
            console.log(this.cadenaInvertir.split("").reverse().join(""));
        }
        catch (err) {
            console.log( "Error : " + err.message);
        }
        
    };
    
}

/* const invertirCadena = new InvertirCadena("Hello World");
invertirCadena.invertir();

const invertirCadenaVacia = new InvertirCadena("");
invertirCadenaVacia.invertir(); */

// ejercicio 4  
class ValidarUsuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login(){
            if(this.username == "admin" && this.password == "passwd"){
                console.log("User logged in")
            } else{
                console.log("User or passwd incorrect")
            }      
    };    
}

let login = new ValidarUsuario("admin", "passwd") // alert -> User logged in
login.login()

let logbad = new ValidarUsuario("pepe", "bad") // alert -> User or passwd incorrect
logbad.login()

 