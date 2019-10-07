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

  shuffle(values);
  selectedcore = values.slice(0,1); 

  document.getElementById('result3').innerHTML = "Maps will choose: " + selectedcore.toString()//values.slice(0,n).toString();  
};
