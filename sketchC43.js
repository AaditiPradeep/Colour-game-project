var cir1, cir2, cir3, cir4;
colorArray = ["red","blue","green","yellow","orange","purple"];
var col; 
var ind1, ind2, ind3, ind4;

function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  ind1=random(0,5);
  ind2=random(0,5);
  ind3=random(0,5);
  ind4=random(0,5);
}

function draw() {
 background(0); 

 push();
 col = colorArray[Math.floor(ind1)];
 fill(col);
 cir1 = ellipse(400,100,50,50);
 pop();

 push();
 col = colorArray[Math.floor(ind2)];
 fill(col);
 cir2 = ellipse(550,100,50,50);
 pop();

 push();
 col = colorArray[Math.floor(ind3)];
 fill(col);
 cir3 = ellipse(700,100,50,50);
 pop();

 push();
 //col = colorArray[Math.floor(random(0,5))];
 col = colorArray[Math.floor(ind4)];
 fill(col);
 cir4 = ellipse(850,100,50,50);
pop();
}

