document.addEventListener("DOMContentLoaded", () => {
    const textoLunes = document.getElementById("lunesTexto");
    const textoMartes = document.getElementById("martesTexto");
    const textoMiercoles = document.getElementById("miercolesTexto");
    const textoJueves = document.getElementById("juevesTexto");
    const textoViernes = document.getElementById("viernesTexto");
    const textoSabado = document.getElementById("sabadoTexto");
    const textoDomingo = document.getElementById("domingoTexto");
    const llunes = document.getElementById("lineaLunes");
    const lmartes = document.getElementById("lineaMartes");
    const lmiercoles = document.getElementById("lineaMiercoles");
    const ljueves = document.getElementById("lineaJueves");
    const lviernes = document.getElementById("lineaViernes");
    const lsabado = document.getElementById("lineaSabado");
    const ldomingo = document.getElementById("lineaDomingo");

    function extraerTexto(texto) {
        const valor = texto.value;
        if (valor) {
            const valor = texto.value;
            return valor
        } else {
            return "valor no encontrado";
        }
    }

    function mostrarTextoFinal() {
        const lunes = extraerTexto(textoLunes);
        const martes = extraerTexto(textoMartes);
        const miercoles = extraerTexto(textoMiercoles);
        const jueves = extraerTexto(textoJueves);
        const viernes = extraerTexto(textoViernes);
        const sabado = extraerTexto(textoSabado);
        const domingo = extraerTexto(textoDomingo);

        llunes.textContent += lunes;
        lmartes.textContent += martes;
        lmiercoles.textContent += miercoles;
        ljueves.textContent += jueves;
        lviernes.textContent += viernes;
        lsabado.textContent += sabado;
        ldomingo.textContent += domingo;

        console.log(lunes, martes, miercoles, jueves, viernes, sabado, domingo);
    }


    function borrarTexto() {
        textoLunes.value = "";
        textoMartes.value = "";
        textoMiercoles.value = "";
        textoJueves.value = "";
        textoViernes.value = "";
        textoSabado.value = "";
        textoDomingo.value = "";
    }

    function limpiarLista() {
        llunes.textContent = "Lunes: ";
        lmartes.textContent = "Martes: ";
        lmiercoles.textContent = "Miércoles: ";
        ljueves.textContent = "Jueves: ";
        lviernes.textContent = "Viernes: ";
        lsabado.textContent = "Sábado: ";
        ldomingo.textContent = "Domingo: ";
    }

    document.querySelector(".botones button:nth-child(1)").onclick = mostrarTextoFinal;
    document.querySelector(".botones button:nth-child(2)").onclick = borrarTexto;
    document.querySelector(".botonLimpiarLista button:nth-child(1)").onclick = limpiarLista;
}
)
