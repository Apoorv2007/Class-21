var gee,ge




function setup() {
  createCanvas(800,400);
  ge=createSprite(300,200,40,90)
  gee=createSprite(400, 200, 50, 50);
 ge.shapeColor="blue";
 gee.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  ge.y=World.mouseY;
  ge.x=World.mouseX;

  if(Collide( ge,gee)){
      ge.shapeColor="pink"
      gee.shapeColor="pink"
   



  }
  else{
  ge.shapeColor="blue";
  gee.shapeColor="red";}


  drawSprites();
}
function Collide (object1,object2) {



if(object1.x-object2.x<object1.width/2+object2.width/2 &&
  object1.y-object2.y<object1.height/2+object2.height/2 &&
  object2.x-object1.x<object1.width/2+object2.width/2 &&
  object2.y-object1.y<object1.height/2+height.width/2 ){

  return true
  }
  else return false
  
  
}
function Bounceoff(ob1,ob2){
  if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
    ob2.x-ob1.x<ob1.width/2+ob2.width/2){
      ob1.velocityX=ob1.velocityX * (-1);
      ob2.velocityX=ob2.velocityX * (-1);
    }

  if(ob1.y-ob2.y<ob1.height/2+ob2.height/2 &&
    ob2.y-ob1.y<ob1.height/2+ob2.height/2){
      
    ob1.velocityY=ob1.velocityY * (-1);
    ob2.velocityY=ob2.velocityY * (-1);
    }
}