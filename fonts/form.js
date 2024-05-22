let datos = {
    nombre: "",
    email:"",
    tipoConsulta: [],
    tipoNegocio: "",
    producto: ""
}

const form = document.querySelector("form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

 
    errorMessage.style.display = "none";


    datos.nombre = formData.get('nombre');
    datos.email = formData.get('email');
    datos.tipoNegocio = formData.get('tipoNegocio');

    datos.tipoConsulta = [];
    form.querySelectorAll('input[name="tipoConsulta"]:checked').forEach(checkbox => {
        datos.tipoConsulta.push(checkbox.value);
    });


    const fileInput = form.querySelector('input[name="producto"]');
    if (fileInput.files.length > 0) {
        datos.producto = fileInput.files[0].name;
    } else {
        datos.producto = "";
    }

    if (!datos.nombre || !datos.email || datos.tipoConsulta.length === 0 || !datos.tipoNegocio || !datos.producto) {
                errorMessage.style.display = "block";
                return;
            }
        
            console.log(datos);
        });