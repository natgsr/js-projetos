function setup() {
    createCanvas(600, 600);
    background("blue");
  }
  
  function draw() {
  
  
    stroke("black");
    fill("red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  