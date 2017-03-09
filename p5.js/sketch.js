var lazyA = [];
//var armsA = [];

function setup() {
  createCanvas(400, 400);
  noFill();

  for (var i = 0; i < 4; i++) {
    lazyA[i] = new Lazy();
  }
  
  // for (var j = 0; j < 3; j++) {
  //   armsA[j] = new ArmsMove();
  // }
}


function draw() {
  for (var i = 0; i < lazyA.length; i++) {
    lazyA[i].human();
    lazyA[i].couch();
    lazyA[i].laptop();
  }
  
  // for (var j = 0; j < armsA.length; j++) {
  //   armsA[j].moving();
  // }
  
  var tite = map(mouseX, 0, height, -7, 10);
  curveTightness(tite);
  stroke('black');
  strokeWeight(0.5);
  beginShape();
  curveVertex(130, 200);
  curveVertex(130, 200);
  curveVertex(130, 110);
  curveVertex(140, 110);
  curveVertex(160, 160);
  curveVertex(160, 160);
  endShape();
} 



function Lazy() {
  this.l = {
    x1: 100,
    y1: 150,
    x2: 200,
    y2: 250,
    w: 40
  } 
  
  this.human = function() {
    stroke('black');
    strokeWeight(2.5);
    noFill();
    ellipse(this.l.x1, this.l.y1, this.l.w + 10, this.l.w + 10); //head
    line(this.l.x1, this.l.y1 + 25, this.l.x1, this.l.x2 + 10); //neck
    line(this.l.x1, this.l.y1 + 60, this.l.x2 + 20, this.l.x2 + 10); //back
    line(this.l.x2 + 20, this.l.x2 + 10, this.l.y2 + 20, this.l.y1 + 20); //leg1
    line(this.l.y2 + 20, this.l.y1 + 20, this.l.y2 + 70, this.l.y1 + 20); //leg1.1 knee

  } 
  
  this.couch = function() {
    noStroke();
    fill('purple');
    ellipse(50, 170, 45, 30); //left armC
    rect(30, 175, 40, 60); //left armR
    rect(30, 220, 335, 50); //bottom R
    rect(325, 175, 40, 60); //right armR
    ellipse(345, 170, 45, 30); //right armC
  }
  
  this.laptop = function () {
    fill('white');
    stroke('gray');
    strokeWeight(7);
    rect(this.l.x1 + 55, this.l.y1 + 45, this.l.w, 5); //keyboard
    strokeWeight(2);
    rect(this.l.x1 + 80, this.l.y1 + 20, this.l.w - 10, this.l.w - 10); //screen
  } 
} 

// function ArmsMove() {
//   this.a = {
//     x: ,
//     y: ,
//     z: 
//   }
  
//   this.moving = function() {
//     noFill();
//     beginShape();
//     curveVertex(x, y);
//     curveVertex(x, y);
//     curveVertex(x, y);
//     curveVertex(x, y);
//     curveVertex(x, y);
//     curveVertex(x, y);
//   }
  
// }