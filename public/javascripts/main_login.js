var boton = document.getElementById("login");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var url = '/api/login';

boton.onclick = ()=>{
    if(!validateEmail(email.value)){
        alert("Error con el correo")
    }else if(!validatePass()){
        alert("Error con la contraseña")
    }else{
        let data = { email: email.value, pass: pass.value };
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => alert("error en la peticion"))
        .then(res => {
            (res.success)
            ? location.href ="/bodega"
            : alert("usuario no encontrado")
        })
    }
}

function validatePass() {
    const re = /^\d+$/;
    return re.test(pass.value);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

