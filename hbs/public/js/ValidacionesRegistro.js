console.log('si abri el archivo')
const formulario = document.getElementById('msform')
formulario.addEventListener('submit', e =>{
    e.preventDefault()
    const expUsuario = /^[a-zA-Z\s]+$/;
    const expContrasena = /^[0-9\s]+$/;
    const expNombre = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/; 
    const usuario = document.getElementById ('usuario').value;
    const contrasena = document.getElementById ('contrasena').value;
    const nombre = document.getElementById ('nombre').value;
    console.log(usuario + contrasena + nombre)
    try{
        if(usuario == ''|| contrasena == ''|| nombre == ''){
            throw 'Todos los campos son obligatorios';
        }
        if (!expUsuario.test(usuario)){
            throw 'Usuario Invalido solo se permite Letras';
        }
        if (!expContrasena.test(contrasena)){
            throw 'Contraseña Incorrecta  !Solo se permiten Numeros¡';
        }
        if (!expNombre.test(nombre)){
            throw 'Nombre invalido';
        }
        else{
            alert('Proceso exitoso')
            window.location.href = '/';
        }
    }catch (e){
        alert (e);
    }

})