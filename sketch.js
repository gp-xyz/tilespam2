var tiles = [];
var framecounter =0;
let randTiles = ['randombs','lop','pop','base',
'fancy','swirl','hexagon','doublecross','shadow','faderangle','swan','lux','hook'];

function setup() {
  createCanvas(600, 900);
  pixelDensity(1);
  angleMode(DEGREES);
  
  showThePattern();
}


function draw(){
  framecounter++;
  if(framecounter%30==0){
    showThePattern();
  }

}

function showThePattern(){

  background('#042a2b');
  var tilesize =random([65,74,100,150]);
  var patternw = random([2,3,3,4,7]);
  var patternh = random([1,1,2,3,5]);
  var occurrence = random([2,2,3,4,3,5]);
  let tobjs = createTileObjects();

  for (let i=0;i<=1+int(width);i+=patternw*tilesize){
    for (let j=0;j<=1+int(height);j+=patternh*tilesize){


      var somepat = new Pattern(patternw,patternh,tilesize,tobjs[0],tobjs[1],occurrence);
      somepat.show(i,j);
      // print(somepat);
  }

}

}

function createTileObjects(){

  let tobj1 = {
    style:random(randTiles),
    bg:color(random(255),random(255),random(255)),
    hc:color(random(255),random(255),random(255)),
  }
  let tobj2 = {
    style:random(randTiles),
    bg:color(random(255),random(255),random(255)),
    hc:color(random(255),random(255),random(255)),
  }


  if (random(1)>.4){ //samebackground
    tobj2.bg=tobj1.bg;
}
if (random(1)>.4){ //samehighlight
  tobj2.hc=tobj1.hc;
}

if (random(1)>.8){
  tobj2.bg=tobj1.hc;
  tobj2.hc=tobj1.bg;
}


return [tobj1,tobj2];

  
}
