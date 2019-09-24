function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function randomMap(){

  var values = [];
  var values1 = [];
  var selectedcore = [];
  var selectedother = [];
  var n = document.getElementById('numpick').value;

  var cbs = document.forms['coremaps'].elements['maps'];
  for(var i=0,cbLen=cbs.length;i<cbLen;i++){
    if(cbs[i].checked){
      values.push(cbs[i].value);
    } 
  }

  shuffle(values);
  selectedcore = values.slice(0,n); 
  
  var cbt = document.forms['othermaps'].elements['others'];
  for(var i=0,cbLen=cbt.length;i<cbLen;i++){
    if(cbt[i].checked){
      values1.push(cbt[i].value);
    } 
  }
  
  shuffle(values1);
  selectedother = values1.slice(0,4-n);

  var selectedtotal = selectedcore.concat(selectedother);
  shuffle(selectedtotal);

  document.getElementById('result').innerHTML = "Core maps: " + selectedcore.toString()//values.slice(0,n).toString();
  document.getElementById('result2').innerHTML = "Other pool maps: " +selectedother.toString()//values.slice(0,n).toString();
  document.getElementById('result3').innerHTML = "Play row: " + selectedtotal.toString()//values.slice(0,n).toString();  
};
