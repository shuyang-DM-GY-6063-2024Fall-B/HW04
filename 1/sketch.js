
function setup(){

  createCanvas(windowWidth, windowHeight);
  
  let color1 = "#435443";
  let color2 = "#aea965";
  let color3 = "#939c6e";
  let color4 = "#4d553a";
  let color5 = "#384e41";
  let color6 = "#416141";
  let color7 = '#4b6141';
  let color8 = '#526e44';
  background(color5)
  let gap = 5;
  strokeWeight(2);
  for(x=0;x<windowWidth/4;x += 2*gap){
      stroke(color2);
      line(x, 0, x, windowHeight);
      stroke(color3);
      line(x + gap, 0, x+ gap, windowHeight);

    }

  for(y=0;y<windowHeight;y += 2*gap){
    stroke(color2);
    line(windowWidth/4+gap, y, windowWidth/2,y);
    stroke(color3);
    line(windowWidth/4+gap, y+gap, windowWidth/2,y+gap);
  }

  noStroke()
  fill(color7)
  triangle(windowWidth/2,0,windowWidth*3/4,0,windowWidth/2,windowWidth/4)
  
  fill(color8)
  let c = 0
  for(x=0;x<100;x+=10){
    triangle(3*windowWidth/4,0,3*windowWidth/4-windowWidth/12-c,3*windowWidth/12-0.9*c,windowWidth/2,0);
    c = x+10
  }
  fill(color4)
  let b = 0
  for(x=0;x<100;x+=10){
    triangle(3*windowWidth/4,0,3*windowWidth/4-windowWidth/12-b,2*windowWidth/12-0.9*b,windowWidth/2,0);
    b = x+10
  }
  fill(color5)
  let a = 0
  for(x=0;x<100;x+=10){
    triangle(3*windowWidth/4,0,3*windowWidth/4-windowWidth/12-1.8*a,windowWidth/12-0.8*a,windowWidth/2,0);
    a = x+10
  }


  noStroke()
  fill(color7)
  triangle(windowWidth,0,windowWidth*3/4,0,windowWidth,windowWidth/4)
  fill(color8)
  c=0
  for(x=0;x<100;x+=10){
    c = x+10  
    triangle(windowWidth,0,windowWidth*13/16+c,windowWidth/12-0.8*c,windowWidth,windowWidth/4);

    
  }
 
  fill(color4)
  b=0
  for(x=0;x<100;x+=10){
    b = x+10  
    triangle(windowWidth,0,windowWidth*14/16+1.2*b,2*windowWidth/12-b,windowWidth,windowWidth/4);

  }
  fill(color5)
  a=0
  for(x=0;x<100;x+=10){
    a = x+10  
    triangle(windowWidth,0,windowWidth*15/16+a,3*windowWidth/12-a,windowWidth,windowWidth/4);

  }

  fill(color4)

  quad(windowWidth/2, windowWidth/4,windowWidth/2, windowHeight,windowWidth*3/4,windowHeight,windowWidth*3/4,0)
  

  
  let r = 2
  for(y=0;y<windowHeight+windowWidth/4;y += 2*gap){
    fill(color2);
    for(x = 0;x<(2^0.5)*(windowWidth/8);x+=r){
      ellipse(windowWidth/2+x, -y+windowWidth/4+windowHeight-x, r)
    }
  }
  

  for(y=0;y<2*windowHeight;y += 2*gap){
    fill(color2);
    for(x = 0;x<(2^0.5)*(windowWidth/8);x+=r){
      ellipse(windowWidth*3/4+x, -windowWidth/4+y+x, r)
    }
  }
  


}
function draw() {

}

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   fill('black')
//   stroke(0.1)
//   let colorRange = [
//     color(252, 244, 3, 90), 
//     color(255, 28, 28, 90), 
//     color(3, 36, 252, 90), 
//     color(42, 156, 61, 90)
//   ];
//   for(x = 0;x<200;x++){
//     let rncolor = random(colorRange);
//     stroke(rncolor)
//     let a = random(0, windowWidth+1);
//     let b = random(0, windowHeight+1);
//     let c = random(0, windowWidth+1);
//     let d = random(0, windowHeight+1);

  
//     line(a, 0, 0, b)
//     line(c,windowHeight,windowWidth,d)
//     for(y = 0;y<1;y++){
//       rncolor = random(colorRange);
//       stroke(rncolor)
//       line(c,0,a,windowHeight)
//       line(0,d,windowWidth,b)
//     }

//   }

// }

// function draw() {

// }
// function mouseClicked(){
//   setup()
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noFill();
//   strokeWeight(1); // Set stroke weight for better visibility

//   let colorRange = [
//     color(252, 244, 3, 90), 
//     color(255, 28, 28, 90), 
//     color(3, 36, 252, 90), 
//     color(42, 156, 61, 90)
//   ];

//   for (let x = 0; x < 300; x++) {
//     let rncolor = random(colorRange);
//     stroke(rncolor);

//     let [x1, y1] = getRandomEdgePoint();
//     let [x2, y2] = getRandomEdgePoint();

//     let cx1 = random(0, windowWidth);
//     let cy1 = random(0, windowHeight);
//     let cx2 = random(0, windowWidth);
//     let cy2 = random(0, windowHeight);

//     bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
//   }
// }

// function getRandomEdgePoint() {
//   let edge = floor(random(4)); // Randomly choose an edge: 0 = top, 1 = right, 2 = bottom, 3 = left
//   switch (edge) {
//     case 0: // Top edge
//       return [random(0, windowWidth), 0];
//     case 1: // Right edge
//       return [windowWidth, random(0, windowHeight)];
//     case 2: // Bottom edge
//       return [random(0, windowWidth), windowHeight];
//     case 3: // Left edge
//       return [0, random(0, windowHeight)];
//   }
// }




