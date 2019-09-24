/* var maps3 = [
    'Cache',
    'Overpass',
    'Train',
    'Vertigo',
    'Dust2',
    'Inferno',
    'Nuke',
    'Mirage'
]; */

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function randomMap(){
 
  var values = [];
  var cbs = document.forms['coremaps'].elements['maps'];
  for(var i=0,cbLen=cbs.length;i<cbLen;i++){
    if(cbs[i].checked){
      values.push(cbs[i].value);
    } 
  }
  maps = values.join(', ')
  shuffle(values);
//  alert('You selected: ' + shuffle(maps3));
  var n = document.getElementById('numpick').value;
//  alert(n.value)
  document.getElementById('result').innerHTML = values.slice(0,n).toString();
};

/* document.getElementById('cmb1').onclick = function() {
    if ( this.checked ) {
        document.getElementById('result').innerHTML =  this.value;
    } else {
        document.getElementById('result').innerHTML =  ''
    }
}; */
