var backgroundImg, footballImg, goalkeeperImg;
var marginTop, marginRight, marginLeft;
var football,
  goalkeeperleftsaveImage,
  rightsaveImage,
  toprightsaveImage,
  topsaveImage,
  scoreBoard,
  scoreBoardImg;
var targetTL, targetTR, targetL, targetR, targetImg;
var shoot = 1,
  goals = 0;
var save1 = 0;
var resultFlag = 0;
function preload() {
  backgroundImg = loadImage("assets/background.jpg");
  footballImg = loadImage("assets/football.png");
  goalkeeperImg = loadAnimation("assets/stand-small.png");
  leftsaveImage = loadAnimation("assets/left-save-small.png");
  rightsaveImage = loadAnimation("assets/right-save-small.png");
  topleftsaveImage = loadAnimation("assets/top-left-save-small.png");
  toprightsaveImage = loadAnimation("assets/top-right-save-small.png");
  scoreBoardImg = loadImage("assets/scoreBoard.png");
  targetImg = loadImage("assets/target.png");
}
function setup() {
  createCanvas(732, 600);
  marginTop = createSprite(width / 2, height / 2 - 60, width, 10);
  marginRight = createSprite(width / 2 - 190, height / 2 - 100, 10, width);
  marginLeft = createSprite(width / 2 + 190, height / 2 - 100, 10, width);
  marginLeft.visible = false;
  marginRight.visible = false;
  marginTop.visible = false;
  scoreBoard = createSprite(width / 2 - 250, height / 3 - 150);
  scoreBoard.addImage("score", scoreBoardImg);
  scoreBoard.scale = 0.3;

  goalkeeper = createSprite(width / 2, height / 2 + 95);
  goalkeeper.addAnimation("goalkeeper", goalkeeperImg);
  goalkeeper.addAnimation("goalkeeperTL", topleftsaveImage);
  goalkeeper.addAnimation("goalkeeperTR", toprightsaveImage);
  goalkeeper.addAnimation("goalkeeperL", leftsaveImage);
  goalkeeper.addAnimation("goalkeeperR", rightsaveImage);
  goalkeeper.scale = 1.4;
  // goalkeeper.debug=true;
  goalkeeper.setCollider("circle", 0, 0, 50);

  targetTL = createSprite(125, height - 380, 20, 20);
  targetTL.addImage("target1", targetImg);
  targetTL.scale = 0.2;

  targetL = createSprite(110, height - 200, 20, 20);
  targetL.addImage("target1", targetImg);
  targetL.scale = 0.2;
  //  targetL.debug=true;

  targetR = createSprite(600, height - 200, 20, 20);
  targetR.addImage("target1", targetImg);
  targetR.scale = 0.2;
  //  targetR.debug=true;

  targetTR = createSprite(590, height - 380, 20, 20);
  targetTR.addImage("target1", targetImg);
  targetTR.scale = 0.2;

  football = createSprite(width / 2, height / 2 + 270);
  football.addImage("football", footballImg);
  football.scale = 0.8;
  // football.debug=true;
}
function draw() {
  background(backgroundImg);
  if (shoot === 2) {
    saves();
  }

  shot();
  goalkeeper.collide(marginTop);
  goalkeeper.collide(marginLeft);
  goalkeeper.collide(marginRight);
  // console.log("goals are "+goals);
  // console.log(" and save are "+save1);
  drawSprites();
  textSize(20);
  text(goals, width / 2 - 245, height / 3 - 160);
  text(save1, width / 2 - 245, height / 3 - 120);
  text("shoots completed:" + resultFlag, width / 2 - 245, height / 3 - 100);
}
