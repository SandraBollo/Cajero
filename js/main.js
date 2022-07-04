

var user1 = ["Eduardo", "edu@gmail.com", "edu150", 750,  'user1.PNG']
var user2 = ["Daniel", "dani@gmail.com", "dan123", 750, 'user1.PNG']
var user3 = ["Sandra", "sandy@gmail.com", "san123", 750, 'user1.PNG' ]

let users = [user1,user2, user3];
let userValido;


function login() {

    let cliente = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;



    userValido = users.find((email) => (email[1] == cliente))
    console.log(userValido)
    if (userValido != undefined ) {
        if (userValido[2] == contrasena) {

            console.log("Login Success")

            let login = document.getElementById("divLogin")
            login.className = "divLoginOculto";
            let bancaDiv = document.getElementById("Banca")
            bancaDiv.className = "showBanca";
            
            document.getElementById("welcome").innerText ="Bienvenido " + userValido[0]
            document.getElementById("saldo").innerText =   "$" + userValido [3]
            let card = "<img src='./img/"+userValido[4]+"'/>";
            document.getElementById("myDiv").innerHTML += card;
            
        } else {
            document.getElementById("error").textContent = " Error, intentalo de nuevo"
        }
    } else {
        document.getElementById("error").textContent = " Error,correo invlaido"
    }

}


function depositar(){
    let montoDep = parseFloat(document.getElementById('montoDep').value)
    console.log(montoDep)

    userValido[3] = montoDep + userValido[3]
    // balance = montoDep + userValido[3]

    if ( userValido[3] > 1000) {
        mostrarError("no puedes tener mas de 999")
    } else{
        document.getElementById("saldo").innerText = "$" + userValido[3]
    }
    // console.log(monto)

}


function retiro(e) {
    let montoRetiro = parseFloat(document.getElementById('montoRetiro').value)
    console.log(montoRetiro)


    // console.log(monto)

    if(  montoRetiro >= userValido[3]){
        mostrarError("No puedes retirar mas de lo que tienes en tu cuenta")
    } else if ((userValido[3]-montoRetiro )< 10){
        mostrarError("Debes de dejar por lo menos 10 pesos en tu cuenta")
    }else{
        userValido[3] = userValido[3] - montoRetiro
            document.getElementById("saldo").innerText = "$" + userValido[3]
    }
}



function mostrarError(mensaje) {
    alert(mensaje)
}



















// var usuario1 = ["Eduardo","edu@gmail.com", "edu150", 750, true]
// var usuario2 = ["Daniel","dani@gmail.com", "dan123", 750, true]
// var usuario3 = ["Sandra","sandy@gmail.com", "san123", 750, true]

// var clientes = [usuario1, usuario2, usuario3]
// let validaciones;

// function login() {

//     let emailJs = document.getElementById('email').value
//     let passwordJs = document.getElementById('password').value
//     console.log("Correo: ", emailJs , passwordJs )

//      validaciones = clientes.find((email) => (email[1] == emailJs))
//         console.log(validaciones)
//     if (validaciones != undefined) {
//         if (validaciones[2] == passwordJs ) {

//             console.log('entrar')
//             let login = document.getElementById("formContainer")
//             login.className = "divLoginOculto";
//             let bancaDiv = document.getElementById("Banca")
//             bancaDiv.className = "showBanca";
//             document.getElementById("welcome").innerText = validaciones[0]
// //             // mandarlo a la pagina principal 
//         }else{  
//             document.getElementById("error").textContent = " Error, intentalo de nuevo"
//         }
         
        
//     } else {
    
//         document.getElementById("error").textContent = " Error,correo invlaido"
//     }
    
// }




// const formJs = document.getElementById('form')
 
// formJs.classList.add('formContainer')

// const validetion = ( email, passwor) =>{

//     let errorEmail = document.getElementById("errorEmail")
//     let errorPasword = document.getElementById("errorPasword")
//     if(email === '' && passwor === '' && email != clientes[i][1] && passwor != clientes[i][2] ){
//         console.log('tienes un error')
//         errorEmail.className = 'error'
//         errorPasword.className = 'error'

//         setInterval(()=>{
//             errorEmail.className = 'error'
//             errorPasword.className = 'error'

//         }, 3000)
//     }else{
//         for (let i = 0; i < clientes.length; i++) {
//             // const element = array[index];
//             if (email === clientes[i][1] && passwor === clientes[i][2]) {
//                 console.log('bien')
//             }

//         } 
//     }
    
    
// }



// Aqui palido que entren los datos
// formJs.addEventListener('submit',(evento)=>{
//     evento.preventDefault();
//     let emailJs = document.getElementById('exampleInputEmail1').value
//     let passwordJs = document.getElementById('exampleInputPassword1').value
//     console.log("Correo: ", emailJs , passwordJs )
//     validetion( emailJs , passwordJs)

//     })
