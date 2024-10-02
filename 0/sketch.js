// copy the wall drawing

let x = 0;
let speed = 5;
let length = 10;
let flowerDetails = [];
//define all the colors I will use




function setup() {
  let color1 = '#4a7ded';
  let color2 = '#6c54e8';
  let color3 = '#2dc0d6';
  let color4 = '#4139db';// dark blue
  let color5 = '#fad43c';// yellow
  let color6 = '#e8a438';// dark yellow 
  let color7 = '#5151cf';
  let color8 = '#3a40e8';
  let color9 = '#b6e072';
  let color10 = '#9f93fa';
  let color11 = '#e887ac';
  let color12 = '#b06f4c';
  


  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
  frameRate(30);
  for (let a = 0; a < windowWidth; a += 8 * length) {
    for (let b = 0; b < windowHeight; b += 8 * length) {
      let num = floor(random(8, 12));
      let d = a / 8 / length % 2 + 1;
      let e = b / length / 8 % 2 + 1;
      let direction = random([-1, 1])
      let chosenc1 = random([color1,color2,color3,color10])
      let chosenc2 = random([color4,color5,color6,color11])
      let chosenc3 = random([color7,color8,color9,color12])
      flowerDetails.push({ a, b, num, d, e, direction,chosenc1,chosenc2,chosenc3});
    }
  }
}


function draw() {
  let deltaX = speed * deltaTime / 1000;

  background('#0e1361');
  // use the function to draw a flower
  function flower(color,x,y,length,angle,n){
    push();
    noStroke();
    // stroke(color2);
    // strokeWeight(1);
    fill(color);

    translate(x, y);
    rotate(angle);
    // draw the single petal and stamen,and use for-loop to create the whole flower.
    // I try to make stamens move with mouse be it seems stiff and I don't kown how to improve it.
    for(let a = 0;a < 360 ;a += 360/n){
      push();
      rotate(a);
      beginShape();
      vertex(0, 0);
      vertex(length*Math.sin(120/n* (Math.PI / 180)),length*Math.cos(120/n* (Math.PI / 180)));
      vertex(1.5*length*Math.sin(60/n* (Math.PI / 180)),1.5*length*Math.cos(60/n* (Math.PI / 180))); 
      vertex(0,length );
      vertex(-1.5*length*Math.sin(60/n* (Math.PI / 180)),1.5*length*Math.cos(60/n* (Math.PI / 180)));
      vertex(-length*Math.sin(120/n* (Math.PI / 180)),length*Math.cos(120/n* (Math.PI / 180)));
      vertex(0, 0);
      endShape();
      // fill(color2);
      // triangle(0,0,1.25*length*Math.cos(360 / n),1.25*length*Math.sin(360 / n),0.8*length*Math.cos(360 / 2*n),0.8*length*Math.sin(360 / 2*n));
      // triangle(0,0,1.25*length*Math.cos(360 / n),-1.25*length*Math.sin(360 / n),0.8*length*Math.cos(360 / 2*n),-0.8*length*Math.sin(360 / 2*n));
      // stroke(color2);
      // strokeWeight(0.75);
      // line(0,0,-1.5*length+(mouseX-windowWidth/2)/windowWidth*2*length,1.5*length+(mouseY-windowHeight/2)/windowHeight*2*length);
      // ellipse(-1.5*length+(mouseX-windowWidth/2)/windowWidth*2*length,1.5*length+(mouseY-windowHeight/2)/windowHeight*2*length, length/3);
      // stroke(color1);
      // fill(color1);

      pop();
    }
    pop();
  }

  x += deltaX;

  // draw flower grids
  for (let i = 0; i < flowerDetails.length; i++) {
    let { a, b, num, d, e,direction,chosenc1,chosenc2,chosenc3} = flowerDetails[i];

    if ((e + d) % 2 === 1) {
      flower(chosenc3,  a-num*direction, b+2*num*direction, 6+num + Math.sin((x - num)/ 6)*num, -x *num/3*direction, num-4);
      flower(chosenc2,  a+2*num*direction, b-num*direction, 4+num + Math.sin((x + num)/ 6)*num, x *num/3*direction, num-3);
    } else {
      flower(chosenc1, a+2*num*direction, b-2*num*direction, 30+num + Math.abs(Math.sin((x + num/2)/ 6))*num-mouseY*num/windowHeight, x *num/3*direction + 45, num-3);
      flower(chosenc2,  a+2*num*direction, b-2*num*direction, 10+0.1*num*num + Math.abs(Math.sin((x + num)/ 6))*num-mouseX*num/windowWidth, x *num/3*direction, num);
    }
  }
}

 function mouseClicked(){
  setup()
 }
      
  
  // flower('black', 'white', windowWidth / 2, windowHeight / 2, 10, x);

