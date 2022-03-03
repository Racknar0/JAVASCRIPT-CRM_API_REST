import {MostrarAlerta} from './funciones.js'

(function () {
        
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //!Validar Formulario
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
        };

        if (validar(cliente)) {
            
            MostrarAlerta('Todos los campos son obligatorios'); //Mostrar Mensaje
            return;
        }
        MostrarAlerta('Validado');

    }

    //!Validar Formulario
    function validar(obj) {
        return !Object.values(obj).every((input) => input !== '');
    }


})();
