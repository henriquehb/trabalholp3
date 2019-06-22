document.getElementById('botao').onclick = function () {
    var idade = document.getElementById('idades').value;
    var string = idade.split(',');

    var menor = [];
    var maior = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] < 18) {
            Array.prototype.push(menor++);
        } else {
            Array.prototype.push(maior++);
        }
    }
    document.getElementById('maior').innerHTML = 'Maior: ' + maior;
    document.getElementById('menor').innerHTML = 'Menor: ' + menor;

}