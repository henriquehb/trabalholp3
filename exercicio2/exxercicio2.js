document.getElementById('botao').onclick = function () {
    var num = document.getElementById('numeros').value;
    var string = num.split(',');

    for (var i = 0; i < string.length; i++) {
        string[i] = parseInt(string[i]);
    }
    var ordenado = string.sort(function (a, b) { return a - b });
    document.getElementById('maior').innerHTML = ordenado[ordenado.length - 1];
}