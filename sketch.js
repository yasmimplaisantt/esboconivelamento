function setup() { 
    createCanvas (700,  700);  
       background("purple");
  
}

function draw() {
  
   stroke("green");
   fill("blue");
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    } 
} 