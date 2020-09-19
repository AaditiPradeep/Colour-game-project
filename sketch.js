var sqr1, sqr2, sqr3, sqr4,sqr5,sqr6,sqr7,sqr8,sqr9,sqr10 ;
var sqr11, sqr12, sqr13, sqr14,sqr15,sqr16;
var colorArray = ["red","blue","green","yellow","orange","purple"]; 
var colArray = [];
var sqrval;
var check1,check2,check3,check4;
var chance, attempt;
var displayWin, displayLost;
var arrowImg, infoImg;

function preload(){
arrowImg = loadImage("ok.jpg");
infoImg = loadImage("gameInfo.png");
playImg = loadImage("play.jpg");
}

function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  attempt = 0;
  chance = 0;
  displayWin = false;
  displayLost = false;
  colArray = shuffle(colorArray);
  console.log(colArray);
 
  redB = createSprite(50,200,20,20);
  redB.shapeColor = "red";
  redB.visible = false;

  blueB = createSprite(100,200,20,20);
  blueB.shapeColor = "blue";
  blueB.visible = false;

  purpleB = createSprite(150,200,20,20);
  purpleB.shapeColor = "purple";
  purpleB.visible = false;

  yellowB = createSprite(50,250,20,20);
  yellowB.shapeColor = "yellow";
  yellowB.visible = false;

  orangeB = createSprite(100,250,20,20);
  orangeB.shapeColor = "orange";
  orangeB.visible = false;

  greenB = createSprite(150,250,20,20);
  greenB.shapeColor = "green";
  greenB.visible = false;

  sqr5 = createSprite(400,200,50,50);
  sqr5.visible = false;
  sqr6 = createSprite(550,200,50,50);
  sqr6.visible = false;
  sqr7 = createSprite(700,200,50,50);
  sqr7.visible = false;
  sqr8 = createSprite(850,200,50,50);
  sqr8.visible = false;
  sqr9 = createSprite(400,300,50,50);
  sqr9.visible = false;
  sqr10 = createSprite(550,300,50,50);
  sqr10.visible = false;
  sqr11 = createSprite(700,300,50,50);
  sqr11.visible = false;
  sqr12 = createSprite(850,300,50,50);
  sqr12.visible = false;
  sqr13 = createSprite(400,400,50,50);
  sqr14 = createSprite(550,400,50,50);
  sqr15 = createSprite(700,400,50,50);
  sqr16 = createSprite(850,400,50,50);
 

  ok1 = createSprite(1000,400,50,50);
  ok1.addImage(arrowImg);
  ok1.scale = 0.06;
  check1 = createSprite(950,400,20,20);
  check1.visible = false;
  check2 = createSprite(1000,400,20,20);
  check2.visible = false;
  check3= createSprite(1050,400,20,20);
  check3.visible = false;
  check4 = createSprite(1100,400,20,20);
  check4.visible = false;

  ok2 = createSprite(1000,300,50,50);
  ok2.visible = false;
  ok2.addImage(arrowImg);
  ok2.scale = 0.06;
  check5 = createSprite(950,300,20,20);
  check5.visible = false;
  check6 = createSprite(1000,300,20,20);
  check6.visible = false;
  check7= createSprite(1050,300,20,20);
  check7.visible = false;
  check8 = createSprite(1100,300,20,20);
  check8.visible = false;

  ok3 = createSprite(1000,200,50,50);
  ok3.visible = false;
  ok3.addImage(arrowImg);
  ok3.scale = 0.06;
  check9 = createSprite(950,200,20,20);
  check9.visible = false;
  check10 = createSprite(1000,200,20,20);
  check10.visible = false;
  check11= createSprite(1050,200,20,20);
  check11.visible = false;
  check12 = createSprite(1100,200,20,20);
  check12.visible = false;

  gameInstructions = createSprite(displayWidth/2,displayHeight/2,500,300);
  gameInstructions.addImage(infoImg);
  gameInstructions.scale = 1.3;

  playB = createSprite(1100,650,20,20); 
  playB.addImage(playImg);
  playB.scale = 0.2;
}

function draw() {
 background("black"); 
 fill("white");
 textSize(18);
 text("- Right colour and right position",320,505);
 text("- Right colour but wrong position",320,555);
 text("- Wrong colour and wrong position",320,605);

 if(mousePressedOver(playB)){
   gameInstructions.visible = false;
   playB.visible = false;
   redB.visible = true;
   blueB.visible = true;
   greenB.visible = true;
   purpleB.visible = true;
   yellowB.visible = true;
   orangeB.visible = true;
   info1.visible = true;
   info2.visible = true;
   info3.visible = true;
 }

 sqr1 = createSprite(400,100,50,50);
 sqr1.shapeColor = colArray[0];

 sqr2 = createSprite(550,100,50,50);
 sqr2.shapeColor = colArray[1];

 sqr3 = createSprite(700,100,50,50);
 sqr3.shapeColor = colArray[2];
 
 sqr4 = createSprite(850,100,50,50);
 sqr4.shapeColor = colArray[3];

 info1 = createSprite(300,500,20,20);
 info1.shapeColor = "white";
 info1.visible = false;

 info2 = createSprite(300,550,20,20);
 info2.shapeColor = "brown";
 info2.visible = false;

 info3 = createSprite(300,600,20,20);
 info3.shapeColor = "grey";
 info3.visible = false;
 
 hide();


 if(mousePressedOver(sqr5) && chance ===2){
  sqrval=sqr5;
  }
  else if(mousePressedOver(sqr6) && chance ===2){
    sqrval=sqr6;
  }
  else if(mousePressedOver(sqr7) && chance ===2){
    sqrval=sqr7;
  }
  else if(mousePressedOver(sqr8) && chance ===2){
    sqrval=sqr8;
  }  

 if(mousePressedOver(sqr9) && chance ===1){
  sqrval=sqr9;
  }
  else if(mousePressedOver(sqr10) && chance ===1){
    sqrval=sqr10;
  }
  else if(mousePressedOver(sqr11) && chance ===1){
    sqrval=sqr11;
  }
  else if(mousePressedOver(sqr12) && chance ===1){
    sqrval=sqr12;
  }  

 if(mousePressedOver(sqr13) && chance ===0){
    sqrval=sqr13;
    }
    else if(mousePressedOver(sqr14) && chance ===0){
      sqrval=sqr14;
    }
    else if(mousePressedOver(sqr15) && chance ===0){
      sqrval=sqr15;
    }
    else if(mousePressedOver(sqr16) && chance ===0){
      sqrval=sqr16;
    }

 if(mousePressedOver(redB)){
  sqrval.shapeColor = "red";
} 
  else if(mousePressedOver(blueB)){
  sqrval.shapeColor = "blue";
}

else if(mousePressedOver(purpleB)){
  sqrval.shapeColor = "purple";
}

else if(mousePressedOver(greenB)){
  sqrval.shapeColor = "green";
}

else if(mousePressedOver(yellowB)){
  sqrval.shapeColor = "yellow";
}

else if(mousePressedOver(orangeB)){
  sqrval.shapeColor = "orange";
}

if(mousePressedOver(ok1)){
  chance = 1;
  attempt = 1;
  ok1.visible = false;
  check1.visible = true;
  check2.visible = true;
  check3.visible = true;
  check4.visible = true;
  sqr9.visible = true;
  sqr10.visible = true;
  sqr11.visible = true;
  sqr12.visible = true;
  ok2.visible = true;

  if(sqr13.shapeColor === sqr1.shapeColor && sqr14.shapeColor === sqr2.shapeColor && sqr15.shapeColor === sqr3.shapeColor && sqr16.shapeColor === sqr4.shapeColor){
  displayWin = true;
  sqr9.visible = false;
  sqr10.visible = false;
  sqr11.visible = false;
  sqr12.visible = false;
  ok2.visible = false;
}
  
}

if(mousePressedOver(ok2)){
  chance = 2;
  attempt = 2;
  ok2.visible = false;
  check5.visible = true;
  check6.visible = true;
  check7.visible = true;
  check8.visible = true;
  sqr5.visible = true;
  sqr6.visible = true;
  sqr7.visible = true;
  sqr8.visible = true;
  ok3.visible = true;

  if(sqr9.shapeColor === sqr1.shapeColor && sqr10.shapeColor === sqr2.shapeColor && sqr11.shapeColor === sqr3.shapeColor && sqr12.shapeColor === sqr4.shapeColor){
   displayWin = true;
  sqr5.visible = false;
  sqr6.visible = false;
  sqr7.visible = false;
  sqr8.visible = false;
  ok3.visible = false;
  }
}

if(mousePressedOver(ok3)){
  chance = 3;
  attempt = 3;
  ok3.visible = false;
  check9.visible = true;
  check10.visible = true;
  check11.visible = true;
  check12.visible = true;
  sqr1.visible = true;
  sqr2.visible = true;
  sqr3.visible = true;
  sqr4.visible = true;
  if(sqr5.shapeColor === sqr1.shapeColor && sqr6.shapeColor === sqr2.shapeColor && sqr7.shapeColor === sqr3.shapeColor && sqr8.shapeColor === sqr4.shapeColor){
   displayWin = true;
   }
   else {
     displayLost = true;
   }
}

//check1
if(sqr13.shapeColor === sqr1.shapeColor){
  check1.shapeColor = "white";
}

if(sqr13.shapeColor === sqr2.shapeColor || sqr13.shapeColor === sqr3.shapeColor || sqr13.shapeColor === sqr4.shapeColor ){
  check1.shapeColor = "brown";
}


//check2
if(sqr14.shapeColor === sqr2.shapeColor){
  check2.shapeColor = "white";
}

if(sqr14.shapeColor === sqr1.shapeColor || sqr14.shapeColor === sqr3.shapeColor || sqr14.shapeColor === sqr4.shapeColor ){
  check2.shapeColor = "brown";
}

//check3
if(sqr15.shapeColor === sqr3.shapeColor){
  check3.shapeColor = "white";
}

if(sqr15.shapeColor === sqr1.shapeColor || sqr15.shapeColor === sqr2.shapeColor || sqr15.shapeColor === sqr4.shapeColor ){
  check3.shapeColor = "brown";
}

//check4
if(sqr16.shapeColor === sqr4.shapeColor){
  check4.shapeColor = "white";
}

if(sqr16.shapeColor === sqr1.shapeColor || sqr16.shapeColor === sqr2.shapeColor || sqr16.shapeColor === sqr3.shapeColor ){
  check4.shapeColor = "brown";
}

//check5
if(sqr9.shapeColor === sqr1.shapeColor){
  check5.shapeColor = "white";
}

if(sqr9.shapeColor === sqr2.shapeColor || sqr9.shapeColor === sqr3.shapeColor || sqr9.shapeColor === sqr4.shapeColor ){
  check5.shapeColor = "brown";
}

//check6
if(sqr10.shapeColor === sqr2.shapeColor){
  check6.shapeColor = "white";
}

if(sqr10.shapeColor === sqr1.shapeColor || sqr10.shapeColor === sqr3.shapeColor || sqr10.shapeColor === sqr4.shapeColor ){
  check6.shapeColor = "brown";
}

//check7
if(sqr11.shapeColor === sqr3.shapeColor){
  check7.shapeColor = "white";
}

if(sqr11.shapeColor === sqr1.shapeColor || sqr11.shapeColor === sqr2.shapeColor || sqr11.shapeColor === sqr4.shapeColor ){
  check7.shapeColor = "brown";
}

//check8
if(sqr12.shapeColor === sqr4.shapeColor){
  check8.shapeColor = "white";
}

if(sqr12.shapeColor === sqr1.shapeColor || sqr12.shapeColor === sqr2.shapeColor || sqr12.shapeColor === sqr3.shapeColor ){
  check8.shapeColor = "brown";
}

//check9
if(sqr5.shapeColor === sqr1.shapeColor){
  check9.shapeColor = "white";
}

if(sqr5.shapeColor === sqr2.shapeColor || sqr5.shapeColor === sqr3.shapeColor || sqr5.shapeColor === sqr4.shapeColor ){
  check9.shapeColor = "brown";
}

//check10
if(sqr6.shapeColor === sqr2.shapeColor){
  check10.shapeColor = "white";
}

if(sqr6.shapeColor === sqr1.shapeColor || sqr6.shapeColor === sqr3.shapeColor || sqr6.shapeColor === sqr4.shapeColor ){
  check10.shapeColor = "brown";
}

//check11
if(sqr7.shapeColor === sqr3.shapeColor){
  check11.shapeColor = "white";
}

if(sqr7.shapeColor === sqr1.shapeColor || sqr7.shapeColor === sqr2.shapeColor || sqr7.shapeColor === sqr4.shapeColor ){
  check11.shapeColor = "brown";
}

//check12
if(sqr8.shapeColor === sqr4.shapeColor){
  check12.shapeColor = "white";
}

if(sqr8.shapeColor === sqr1.shapeColor || sqr8.shapeColor === sqr2.shapeColor || sqr8.shapeColor === sqr3.shapeColor ){
  check12.shapeColor = "brown";
}

if(displayWin === true){
   youWin();
}

if(displayLost === true){
  youLose();
}
drawSprites();
  
}

    function hide(){
      sqr1.visible = false;
      sqr2.visible = false;
      sqr3.visible = false;
      sqr4.visible = false;
    }

    function youWin(){
  text("YOU WIN!",950,550);
  text(attempt+ " Out of total 3 attempts",950,600);
  sqr1.visible = true;
  sqr2.visible = true;
  sqr3.visible = true;
  sqr4.visible = true;
  text("← CORRECT ANSWER",950,100);
}

function youLose(){
  text("YOU LOSE!",950,550);
  sqr1.visible = true;
  sqr2.visible = true;
  sqr3.visible = true;
  sqr4.visible = true;
  text("← CORRECT ANSWER",950,100);
}

   

        
      
    


  
      
  





