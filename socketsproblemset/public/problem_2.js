var socket = io()



function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}

function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
}

function mouseClicked() {
fill("lightblue")
var randX = random(0, 450)
var randY = random(0, 450)
//rect(randX, randY, 50, 50)

var infoToSend = {x: randX, y: randY}

socket.emit("coordinates", infoToSend)

}

socket.on("coordinates", function(info){
    fill("lightblue")
    ellipse(info.x, info.y, 50, 50)
})
