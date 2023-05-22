// Ejercicio 1
let person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
  }

const valores = (obj) => Object.values(obj);
console.log(valores(person))

// Ejercicio 2

// Ejercicio 3
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

// Ejercicio 4
class ValidarUsuario {
  constructor(username, password) {
      this.username = username;
      this.password = password;
  }

  login(){
          if(this.username == "admin" && this.password == "passwd"){
              alert("User logged in")
          } else{
              alert("User or passwd incorrect")
          }      
  };    
}

let login = new ValidarUsuario("admin", "passwd") // alert -> User logged in
//login.login()

let logbad = new ValidarUsuario("pepe", "bad") // alert -> User or passwd incorrect
//logbad.login()

// Ejercicio 5
const buttonSuccess = document.getElementById("loginSuccess");
const buttonFailure = document.getElementById("loginFailure");

buttonSuccess.addEventListener("click", function(){
  login.login()
})

buttonFailure.addEventListener("click", function(){
  logbad.login()
})


// Ejercicio 6
let loginWitUsername = (username, password) => {
  //console.log(username, password)
  try{
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
  }
  catch (err) {
    console.log( "Error : " + err.message); 
  }
    
};

const buttonSuccessAsync = document.getElementById("loginSuccessAsync");
const buttonFailureAsync = document.getElementById("loginFailureAsync");

buttonSuccessAsync.addEventListener("click", async() =>{
  //console.log("clicked")
  try{
    let response = await loginWitUsername("admin","passwd")
    console.log(response)
  }
  catch (error) {
      console.log(error);
    }
})

buttonFailureAsync.addEventListener("click", async() =>{
  //console.log("clicked")
  try{
    let response = await loginWitUsername("pepe","bad")
    console.log(response)
  }
  catch (error) {
      console.log(error);
    }
})