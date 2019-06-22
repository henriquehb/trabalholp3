var d = new Date();

var dia = d.getDate() <= 9 ? "0" + (d.getDate()) : d.getDate();
var mes = (d.getMonth() + 1) <= 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;

var month = new Array();
month[0] = "Janeiro";
month[1] = "Fevereiro";
month[2] = "Março";
month[3] = "Abril";
month[4] = "Maio";
month[5] = "Junho";
month[6] = "Julho";
month[7] = "Agosto";
month[8] = "Setembro";
month[9] = "Otubro";
month[10] = "Novembro";
month[11] = "Dezembro";

var m = month[d.getMonth()];
var ano = d.getFullYear();

document.getElementById('data1').innerHTML = dia + '/' + mes + '/' + ano;
document.getElementById('data2').innerHTML = ano + '-' + mes + '-' + dia;
document.getElementById('data3').innerHTML = dia + ' de ' + m + ' de ' + ano;