let resultadosConversiones = []

function convertidor() {
    let cordenadas = document.getElementById('cordenadas').value
    var miCadena = cordenadas; // Convertimos el número en string
    var divisiones = miCadena.match(/.{1,2}/g); // Divide en pares de dos caracteres
    // console.log(divisiones); // Verifica qué contiene divisiones
    // Convertimos los valores en números

    if (resultadosConversiones.some(item => item.cordenadas === cordenadas)) {
        alert("Digite otro dato papi lindo")
    } else {
        let grados = parseInt(divisiones[0]);
        let minutos = parseInt(divisiones[1]);
        let segundos = parseInt(divisiones[2]);

        let minutosEnGrados = minutos / 60;
        let segundosEnGrados = segundos / 3600;


        let total = grados + minutosEnGrados + segundosEnGrados;
        resultadosConversiones.push({
            cordenadas: cordenadas,
            grados: grados,
            minutos: minutosEnGrados.toFixed(4),
            segundos: segundosEnGrados.toFixed(4),
            total: total.toFixed(4)
        })

        console.log(`Los grados son ${grados}, los minutos en grados son ${minutosEnGrados.toFixed(4)}, los segundos en grados son ${segundosEnGrados.toFixed(3)} y el total en grados es ${total.toFixed(3)}`);
        console.log(resultadosConversiones);

        editarTexto();
    }


}



function editarTexto() {
    let textoUsuarios = document.getElementById('Mostrar_elementos');
    textoUsuarios.innerHTML = "";
    for (let i = 0; i < resultadosConversiones.length; i++) {

        let conversion = resultadosConversiones[i];
        textoUsuarios.innerHTML += ` <tr><td><p>cordenadas: ${conversion.cordenadas}</td>  <td> Grados: ${conversion.grados}  </td> <td> Minutos: ${conversion.minutos} </td> <td> Segundos: ${conversion.segundos} </td><td> Total: ${conversion.total}</p><td></tr>`
            ;
    }

}


// console.log(resultadosConversiones[0].texto)