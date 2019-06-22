var deuses = ['Aegir', 'aud', 'Balder'];
var deuses2 = ['Loki', 'Odin', 'Frey']

Array.prototype.push.apply(deuses, deuses2);

for (var i = 0; i < deuses.length; i++) {
    alert(deuses[i]);
}