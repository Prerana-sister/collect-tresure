var path,boy,cash,diamonds,jwellery,ruby;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,rubyImg;
var i;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,rubyG;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  rubyImg = loadImage("sword.png");
}

function setup(){
  
  createCanvas(400,400);
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
// path.scale=1.2;

//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("JakeRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
rubyG=new Group();

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse'
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createRuby();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(rubyG.isTouching(boy)) {
      rubyG.destroyEach();
      treasureCollection=treasureCollection - 50;
    }
  }
  
  if(treasureCollection%500 === 0){
    
  }
  if(path.y>height){
    path.y=height/2
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+treasureCollection,150,30);
}



function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.15;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.05;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
jwellery.addImage(jwelleryImg);
  jwellery.scale=0.2;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createRuby(){
  if (World.frameCount % 150 == 0) {
  var ruby = createSprite(Math.round(random(50, 350),40, 10, 10));
ruby.addImage(rubyImg);
  ruby.scale=0.1;
  ruby.velocityY = 3;
  ruby.lifetime = 150;
  rubyG.add(ruby);
  }
}