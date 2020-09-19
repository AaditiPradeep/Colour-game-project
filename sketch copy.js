var sqr1, sqr2, sqr3, sqr4,sqr5,sqr6,sqr7,sqr8,sqr9,sqr10 ;
var sqr11, sqr12, sqr13, sqr14,sqr15,sqr16,sqr17,sqr18,sqr19,sqr20;
var colorArray = ["red","blue","green","yellow","orange","purple"];
var choice = ["colorYes-positionYes","colorYes-positionNo","colorNo-positionNo"];
var col; 
var colArray = [];
var val, val1;


function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  colArray = shuffle(colorArray);
  console.log(colArray);
  //radio_options1();
  //radio_options2();
 // radio_options3();
  //radio_options4();
  //radio_options5();

  redB = createSprite(20,200,20,20);
}

function draw() {
 background("white"); 

 sqr1 = createSprite(400,100,50,50);
 sqr1.shapeColor = colArray[0];

 sqr2 = createSprite(550,100,50,50);
 sqr2.shapeColor = colArray[1];

 sqr3 = createSprite(700,100,50,50);
 sqr3.shapeColor = colArray[2];
 
 sqr4 = createSprite(850,100,50,50);
 sqr4.shapeColor = colArray[3];

 sqr5 = createSprite(400,200,50,50);
 sqr6 = createSprite(550,200,50,50);
 sqr7 = createSprite(700,200,50,50);
 sqr8 = createSprite(850,200,50,50);
 sqr9 = createSprite(400,300,50,50);
 sqr10 = createSprite(550,300,50,50);
 sqr11 = createSprite(700,300,50,50);
 sqr12 = createSprite(850,300,50,50);
 sqr13 = createSprite(400,400,50,50);
 sqr14 = createSprite(550,400,50,50);
 sqr15 = createSprite(700,400,50,50);
 sqr16 = createSprite(850,400,50,50);


 start();
 visibilityOff();

 val = radio.value();
  if(String(val) == colArray[0]){
      sqr1.shapeColor = val;
}

    val3 = radio3.value();
  if(String(val3) == colArray[1]){
      sqr2.shapeColor = val3;
     
  }
  
    val4 = radio4.value();
  if(String(val4) == colArray[2]){
      sqr3.shapeColor = val4;
    }
  
    val5 = radio5.value();
  if(String(val5) == colArray[3]){
      sqr4.shapeColor = val5;
    }
  
 val2 = radio2.value();
  if (val2) {
    console.log(val2);
  }

  drawSprites();
}

function radio_options1() {
  
    // Create a radio-button object 
    // and set options 
   radio = createRadio();
   
    // Option 1 : 
    radio.option(colorArray[5]);
  
    // Option 2 :  
    radio.option(colorArray[4]);
  
    // Option 3 : 
    radio.option(colorArray[3]);
  
    // Option 4 :  
    radio.option(colorArray[2]);
  
    // Option 5 : 
    radio.option(colorArray[1]);

    radio.option(colorArray[0]);
  
    radio.position(50, 250);
  }

  function radio_options2() {
  
     radio2 = createRadio();
     
      // Option 1 : 
      radio2.option(choice[0]);
    
      // Option 2 :  
      radio2.option(choice[1]);
    
      // Option 3 : 
      radio2.option(choice[2]);
    
      radio2.position(700,250);
  }
    
   function start(){
      sqr1.shapeColor = "grey";
      sqr2.shapeColor = "grey";
      sqr3.shapeColor = "grey";
      sqr4.shapeColor = "grey";
    }

    function visibilityOff(){
      sqr1.visible = false;
      sqr2.visible = false;
      sqr3.visible = false;
      sqr4.visible = false;
    }

  
      
  





