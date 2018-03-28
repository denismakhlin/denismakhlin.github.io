var socket = io()

var x = 17;

var r = 0;
var g = 0;
var b = 0;



function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
    strokeWeight(x)
    stroke(r, g, b);
    
    
}

function touchMoved(){
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    var infoToSend = {
        x: x, 
        r: r,
        g: g,
        b: b,
        mouseX: mouseX,
        mouseY: mouseY,
        pmouseX: pmouseX,
        pmouseY:pmouseY
    
    }

    socket.emit("paintCoordinates", infoToSend)
        return false;
    
}



function bigBrush(){
    strokeWeight(x+=4);
    stroke(r, g, b);
}
function smallBrush(){
    strokeWeight(x-=4)
    stroke(r, g, b);
}
function normBrush(){
    strokeWeight(17)
    stroke(r, g, b);
}
function color1(){
    g = 0;
    b = 0;
    r = 255;
    stroke(r, g, b);
}
function color2(){
    r = 0;
    b = 0;
    g = 255;
    stroke(r, g, b);
}
function color3(){
    r = 0;
    g = 0;
    b = 255;
    stroke(r, g, b);
}
function refresh(){
    location.reload();
}





socket.on("paintCoordinates", function(info){
    x = info.x;
    
    r = info.r;
    g = info.g;
    b = info.b;
    
    mX = info.mouseX
    mY = info.mouseY
    mpX = info.pmouseX
    mpY = info.pmouseY
    
    strokeWeight(x)
    stroke(r, g, b);
    line(mX, mY, mpX, mpY);
    
    
})
