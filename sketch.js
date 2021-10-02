// create variables
var appleImg, appleGrp,apple;
var bgImg,backery;
var bowlImg,bowlGrp,bowl;
var promoImg,promoGrp,promo;
var rasImg,rasGrp,rasberry;
var pearImg,pearGrp,pear;
var playMode='play';
var fruitGrp;
var score=0 ;
var railImg,rail;
var restartImg,restart;


function preload() {
  // loadImages
  appleImg=loadImage('images/apple.png');
  bgImg=loadImage('images/backery.jpg');
  bowlImg=loadImage('images/bowl.png');
  promoImg=loadImage('images/promo.png');
  rasImg=loadImage('images/rasberry.png');
  pearImg=loadImage('images/pear.png');
  railImg=loadImage('images/rail.png');
  restartImg=loadImage('images/restart.png')

}



function setup() {
createCanvas(1000, 600);



// create Spites
bg = createSprite(580,300);
bg.addImage(bgImg)
bg.scale=0.4

bowl=createSprite(500,450,1,1)
bowl.addImage(bowlImg)
bowl.scale=0.05

restart=createSprite(500,300,1,1)
restart.addImage(restartImg)
restart.scale=0.4


sprite=createSprite(500,440,160,10)

rail=createSprite(500,680)
rail.addImage(railImg)
rail.scale=0.9
// create ground
ground=createSprite(500,600,1000,1)
ground.visible=false
ground1=createSprite(1002,590,10,10000)
// ground1.visible=false
ground2=createSprite(2,300,1,10000)
ground2.visible=false



// create Groups
appleGrp=new Group()
pearGrp=new Group()
promoGrp=new Group()
rasGrp=new Group()
fruitGrp=new Group()


}

function draw(){
  drawSprites();
  fill('black')
  stroke('rgb(100%,0%,10%)');
  strokeWeight(10);
  textSize(20)
  text('Total Score :  '+score,475,25)
    
  // bowl.collide(ground)
  bowl.collide(ground1)
  bowl.collide(ground2)
  sprite.collide(ground1)
  sprite.collide(ground2)
  sprite.visible=false
  if(playMode==='play'){
    if(score<=-100){
      playMode='end'
    }

    restart.visible=false
    
    if(keyDown('right')){
      bowl.velocityX=10
    }
    if(keyDown('left')){
      bowl.velocityX=-10
    }
    if(keyDown('s')){
      bowl.velocityX=0
    }
    if(keyDown('right')){
      sprite.velocityX=10
    }
    if(keyDown('left')){
      sprite.velocityX=-10
    }
    if(keyDown('s')){
      sprite.velocityX=0
    }
    createPromo()
    for(a=0;a<(promoGrp).length;a++){
      var s=(promoGrp).get(a)
      if(s.isTouching(sprite)){
        score=score+20
        s.destroy()
        s=null
      }
    }
    for(zx=0;zx<(promoGrp).length;zx++){
      var xz=(promoGrp).get(zx)
      if(xz.isTouching(ground)){
        score=score-20
        xz.destroy()
        xz=null
      }
    }

    createRas()
    for(d=0;d<(rasGrp).length;d++){
    var f=(rasGrp).get(d)
    if(f.isTouching(sprite)){
      score=score+15
      f.destroy()
      f=null
    }}
    for(as=0;as<(rasGrp).length;as++){
    var sa=(rasGrp).get(as)
    if(sa.isTouching(ground)){
      score=score-15
      sa.destroy()
      sa=null
    }}

    createPear()
    for(t=0;t<(pearGrp).length;t++){
      var y=(pearGrp).get(t)
      if(y.isTouching(sprite)){
        score=score+10
        y.destroy()
        y=null
      }
    }
    for(qw=0;qw<(pearGrp).length;qw++){
      var wq=(pearGrp).get(qw)
      if(wq.isTouching(ground)){
        score=score-10
        wq.destroy()
        wq=null
      }
    }



    createApple()
    for(q=0;q<(appleGrp).length;q++){
      var w=(appleGrp).get(q)
      if(w.isTouching(sprite)){
        score=score+5
        w.destroy()
        w=null
      }
    }
    for(e=0;e<(appleGrp).length;e++){
      var r=(appleGrp).get(e)
      if(r.isTouching(ground)){
        score=score-5
        r.destroy()
        r=null
      }
    }
}


else if(playMode==='end'){
  promoGrp.setVelocityXEach(0)
  pearGrp.setVelocityXEach(0)
  appleGrp.setVelocityXEach(0)
  rasGrp.setVelocityXEach(0)
  appleGrp.destroyEach()
  pearGrp.destroyEach()
  promoGrp.destroyEach()
  rasGrp.destroyEach()
  bowl.velocityX=(0)
  sprite.velocityX=(0)
  restart.visible=true
  bowl.velocityX=0
  score=0
  sprite.velocityX=0
  strokeWeight(5)
  text('GAME OVER   :' + score,410,200)
  


}
if(mousePressedOver(restart)){
  clickRestart()
}


}

function createApple(){
  if(frameCount%40===0){
    var apple=createSprite(1000,-1,50,50)
    apple.velocityY=5
    apple.x=random(15,975)
    apple.addImage(appleImg)
    apple.scale=0.1
    apple.lifetime=300    
    appleGrp.add(apple)
    
  }
}


function createPear(){
  if(frameCount%80===0){
    var pear=createSprite(600,-1,50,50)
    pear.velocityY=5
    pear.x=random(15,975)
    pear.addImage(pearImg)
    pear.scale=0.1
    pear.lifetime=300
    pearGrp.add(pear)
  }
}

function createPromo(){
  if(frameCount%100===0){
    var promo=createSprite(400,-1,50,50)
    promo.velocityY=10
    promo.addImage(promoImg)
    promo.x=random(15,975)
    promo.scale=0.1
    promo.lifetime=300
    promoGrp.add(promo)

  }
}


function createRas(){
  if(frameCount%65===0){
  var ras=createSprite(200,-1,50,50)
  ras.velocityY=8
  ras.addImage(rasImg)
  ras.x=random(15,975)
  ras.scale=0.05
  ras.lifetime=300
  rasGrp.add(ras)

}}


function clickRestart(){
  playMode='play'
  playMode==='play'
}