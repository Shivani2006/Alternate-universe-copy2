var sun, planet1, planet2,planet3,planet4,testSprite;
var imgSun,imgPlanet1,imgPlanet2,imgPlanet3,imgPlanet4;  
function preload()
{
  imgSun = loadImage("./img/sun.png");
  imgPlanet1 = loadImage("./img/venus.png");
  imgPlanet2 = loadImage("./img/saturn.png");
  imgPlanet3 = loadImage("./img/earth.png");
  imgPlanet4 = loadImage("./img/pluto.png");
}

function setup() {
  createCanvas(1200,610);
  sun= createSprite(600,300, 50, 50);
  sun.addImage(imgSun);
 
  
  planet1 =createSprite(500,200,50,50);
  planet1.scale =0.2;
  planet1.addImage(imgPlanet1);
  
  //planet1.debug = true;
 
  planet2 = createSprite(700,400,50,50);
  planet2.scale =0.2;
  planet2.addImage(imgPlanet2);
  //planet2.debug = true;
 
  planet3 = createSprite(500,400,50,50);
  planet3.addImage(imgPlanet3);
  planet3.scale =0.2;

  //planet3.debug = true;
  
  planet4 = createSprite(700,200,50,50);
  planet4.addImage(imgPlanet4);
  planet4.scale =0.2;

  //planet4.debug = true;
 
  }

function draw() {
  background(0);
  
  if(frameCount%5===0 && sun.scale<4.5){
  sun.scale= sun.scale+0.01;
 }
  sun.setCollider("rectangle", 0, 0, 70, 90, -45);
  //sun.debug = true;
  if (sun.displace(planet1)) {
    planet1.destroy();
  }
    if(sun.displace(planet2)){
    planet2.destroy();
  }
    if(sun.displace(planet3)){
    planet3.destroy();
  }
  if(sun.displace(planet4)){
    planet4.destroy();
  }
  
  drawSprites();
     
      
   
}