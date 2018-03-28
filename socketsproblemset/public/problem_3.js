var socket = io()

var x = 250
var y = 250
var bg
var bear

function preload() {
  bg = loadImage("forestbg.jpg")
  bear = loadGif("bear.gif")
}

function setup() {
    createCanvas(500, 500)
}

function draw() {
    background(bg)
    image(bear, x, y, 100, 100)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
     x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    x += 10;
  }
    else if (keyCode === UP_ARROW) {
    y -= 10;
  }
    
    else if (keyCode === DOWN_ARROW) {
    y += 10;
  }
    
var infoToSend = {x: x, y: y}


socket.emit("bearCoordinates", infoToSend)

}

socket.on("bearCoordinates", function(info){
    x = info.x;
    y = info.y;
})
