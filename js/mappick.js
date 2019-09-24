var maps = [
    'Dust2',
    'Inferno',
    'Nuke',
    'Mirage'
];

var maps2 = [
    'Cache',
    'Overpass',
    'Train',
    'Vertigo'
];

var maps3 = [
    'Cache',
    'Overpass',
    'Train',
    'Vertigo',
    'Dust2',
    'Inferno',
    'Nuke',
    'Mirage'
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function randomMap(){
  
    shuffle(maps);
    shuffle(maps2);

    document.getElementById('result').innerHTML =    maps.slice(0,2).toString();
    document.getElementById('result2').innerHTML =    maps2.slice(0,2).toString();
};
