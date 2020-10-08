let ufo1;
let skyImage, grassImage;

function setup() {
  createCanvas(800, 800);  //set canvas size (duh)
  ufo1 = new UFO(30, 70);
  skyImage = loadImage('moon sky.jpeg');  //loads image into image object
  grassImage = loadImage('dead grass.jpg');  //load grass image
  silImage = loadImage('silhouette.png');  //load silhouette
  smudge = loadImage('shadowSmudge.png');  //cover hill line
  
}

function draw() {
  background(220, 300, 200);  //sets background color (RGB vars) 

  
  image(skyImage, 0, 0, 800, 250);  //use sky image
  image(grassImage, 0, 250); //use grass image
  image(silImage, 0, 150);
  image(smudge, 0, -100);
  
  line(0, 250, 800, 250); //horizon

  ufo1.show();
  for(var i = 0; i < 1; i++)
  {
    if(i == 1)
    {
        i = 0;
    }
    ufo1.move(i);
  }
  
  
  //-begin house top
  //roof square (unseen, used for planning placement)
  //for roof and body
  beginShape();
  
  vertex(150, 350); //left point
  vertex(350, 400); //bottom point 
  vertex(500, 350); //right point
  vertex(300, 325); //top point
  endShape(CLOSE);
  //-end house top
  
  //-begin house body
  //left wall
    fill(239, 62, 91);  //color

  beginShape();
  vertex(150, 350); //top left point
  vertex(150, 600); //bottom left point
  vertex(350, 675); //bottom right point
  vertex(350, 400); //top right point
  endShape(CLOSE);
  
  //right wall
    fill(242, 98, 121);  //color

  beginShape();
  vertex(350, 400); //top left point
  vertex(350, 675); //bottom left point
  vertex(500, 600); //bottom right point
  vertex(500, 350); //top right point
  endShape(CLOSE);
  //-end house body
  
  //-begin roof
  //left side
    fill(117, 62, 69);  //color

  beginShape();
  vertex(150, 350); //left point
  vertex(350, 400); //right point
  vertex(330, 150); //top point
  endShape(CLOSE);
  
  //right side
    fill(111, 84, 95);  //color

  beginShape();
  vertex(350, 400); //left point
  vertex(500, 350); //right point
  vertex(330, 150); //top point
  endShape(CLOSE);
  //-end roof
  
  //-begin windows
  //left window
    fill(104, 143, 173);  //color

  beginShape();
  vertex(170, 400); //top left point
  vertex(170, 500); //bottom left point
  vertex(200, 510); //bottom right point
  vertex(200, 408); //top right point
  endShape(CLOSE);
  
  //right window
  beginShape();
  vertex(270, 425); //top left point
  vertex(270, 530); //bottom left point
  vertex(300, 540); //bottom right point
  vertex(300, 433); //top right point
  endShape(CLOSE);
  
  //circle window
    fill(150, 193, 211);  //color

  ellipse(435, 450, 60, 80); 
  //-end windows
  
  //-begin door
  fill(78,62,50);  //color
  beginShape();
  vertex(420, 640); //bottom left
  vertex(420, 540); //top left
  vertex(455, 527); //top right
  vertex(455, 623); //bottom right
  endShape(CLOSE);
  //-end door
  
 


}

class UFO {
  constructor(x, y){
    this.x = 100;
    this.y = 100;
  }
  
  move(x) {
    this.x = this.x +1;
  }
  
  show() {
    //noStroke();
    fill(100, 100, 100);
    beginShape();
    ellipse(this.x, this.y, 45, 15);
    ellipse(this.x, this.y, 30, 30);  
    endShape(CLOSE);
  }
}