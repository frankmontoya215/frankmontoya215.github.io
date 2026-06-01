function mostrarProceso(id){

    document.getElementById("procesos").style.display = "none";

    document.querySelectorAll(".documentos").forEach(doc => {
        doc.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function volver(){

    document.querySelectorAll(".documentos").forEach(doc => {
        doc.style.display = "none";
    });

    document.getElementById("procesos").style.display = "grid";
}

document.addEventListener("DOMContentLoaded", function(){

    const urlParams = new URLSearchParams(window.location.search);

    const proceso = urlParams.get("proceso");

    if(proceso){

        mostrarProceso(proceso);
    }

});


function mostrarServicio(id){

    document.getElementById("servicios-menu").style.display = "none";

    document.querySelectorAll(".detalle").forEach(div => {
        div.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

function volverServicios(){

    document.querySelectorAll(".detalle").forEach(div => {
        div.style.display = "none";
    });

    document.getElementById("servicios-menu").style.display = "grid";
}
