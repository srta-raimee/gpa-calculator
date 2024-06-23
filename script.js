// funçao que adiciona novos campos para adicionar nota/carga horaria
document.getElementById('addField').addEventListener('click', function() {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('inputGroup');

    const cargaHorariaLabel = document.createElement('label');
    cargaHorariaLabel.innerHTML = ' <b>CARGA HORÁRIA: </b> <select name="cargaHoraria" required><option value="40">40</option><option value="80">80</option><option value="120">120</option></select>';
    inputGroup.appendChild(cargaHorariaLabel);

    const notaLabel = document.createElement('label');
    notaLabel.innerHTML = ' <b>NOTA:</b> <input type="number" name="nota" step="0.1" required> ';
    inputGroup.appendChild(notaLabel);

    // para remover o campo pq nunca se sabe né
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList.add('removeField');
    removeButton.textContent = "REMOVER CAMPO";
    inputGroup.appendChild(removeButton);

    document.getElementById('inputFields').appendChild(inputGroup);

    // funçao que remove o campo 
    removeButton.addEventListener('click', function() {
        inputGroup.remove();
    });
});

// funçao que realiza o calculo do IRA com os dados digitados
document.getElementById('iraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cargaHorarias = Array.from(document.getElementsByName('cargaHoraria')).map(select => parseFloat(select.value));
    const notas = Array.from(document.getElementsByName('nota')).map(input => parseFloat(input.value));

    let numerador = 0;
    let denominador = 0;

    for (let i = 0; i < cargaHorarias.length; i++) {
        numerador += cargaHorarias[i] * notas[i];
        denominador += cargaHorarias[i];
    }

    const ira = numerador / denominador;
    document.getElementById('iraResultado').textContent = ira.toFixed(2);
});
