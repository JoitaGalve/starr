var frec, mrec;
var trec, brec;
var hrec, vrec;
var s1, s1Sound;

function preload() {
  s1Sound = loadSound("S1.mp3")
}
function setup() {
  createCanvas(800,400);
  frec = createSprite(400, 200, 100, 50);
  mrec = createSprite(100, 100, 100, 50)
  frec.shapeColor = "blue"
  mrec.shapeColor = "blue"
  frec.debug = true
  mrec.debug = true
  trec = createSprite(600, 50, 100, 50);
  brec = createSprite(600, 350, 100, 50);
  trec.shapeColor = "purple"
  brec.shapeColor = "red"
  trec.velocityY = 2
  brec.velocityY = -2
  hrec = createSprite(80, 200, 100, 50)
  vrec = createSprite(600, 200, 100, 50)
  hrec.shapeColor = "black"
  vrec.shapeColor = "orange"
  hrec.velocityX = 2
  vrec.velocityX = -2
}

function draw() {
  background("grey");  
  mrec.x = mouseX
  mrec.y = mouseY

  if(mrec.x-frec.x<=mrec.width/2+frec.width/2
    && frec.x-mrec.x<=mrec.width/2+frec.width/2
    && mrec.y-frec.y<=mrec.height/2+frec.height/2
    && frec.y-mrec.y<=mrec.height/2+frec.height/2) {

      frec.shapeColor = "green"
      mrec.shapeColor = "pink" 
    }

    else{
  frec.shapeColor = "blue"
  mrec.shapeColor = "blue"
    }

    if(trec.y-brec.y<=trec.height/2+brec.height/2 && 
      brec.y-trec.y<=trec.height/2+brec.height/2) {
        trec.velocityY = trec.velocityY*(-1)
        brec.velocityY = brec.velocityY*(-1)
      }

      if(hrec.x-vrec.x<=hrec.width/2+vrec.width/2 &&
        vrec.x-hrec.x<=hrec.width/2+vrec.width/2) {
          hrec.velocityX = 0
          vrec.velocityX = 0
          s1Sound.play()
        }
  drawSprites();
}