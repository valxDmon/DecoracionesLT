console.log('si abri el archivo')
const formulario = document.getElementById('msform')
formulario.addEventListener('submit', e =>{
    e.preventDefault()
    const expUsuario = /^[a-zA-Z\s]+$/;
    const expContrasena = /^[0-9\s]+$/;

    const usuario = document.getElementById ('usuario').value;
    const contrasena = document.getElementById ('contrasena').value;

    console.log(usuario + contrasena)
    try{
        if(usuario == ''|| contrasena == ''){
            throw 'Todos los campos son obligatorios';
        }
        if (!expUsuario.test(usuario)){
            throw 'Usuario Incorrecto  !Solo se permiten Letras¡';
        }
        if (!expContrasena.test(contrasena)){
            throw 'Contraseña Incorrecta  !Solo se permiten Numeros¡';
        }
        else{
            alert('Proceso exitoso')
            window.location.href = '/';
        }
    }catch (e){
        alert (e);
    }

})