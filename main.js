function preload(){

}
function setup(){
 canvas = createCanvas(500, 500);
 canvas.position(250, 250);
 video =createCapture(VIDEO);
 video.hide()
}

function draw(){
    image(video, 100, 100, 300, 300);
    fill("lavender");
    stroke("grey");
    circle(50, 60, 90, 40);
    fill("turquoise");
    stroke("white");
    rect(100, 40, 300, 40);
    fill("lavender");
    stroke("grey");
    circle(450, 60, 90, 40);
    translate(70, 110)
    rotate( PI / 2);
    fill("turquoise");
    stroke("white");
    rect(0, 0, 280, 40);
    fill("lavender");
    stroke("grey");
    circle(330, 20, 90, 40);
    fill("turquoise");
    stroke("white");
    translate(350, -330)
    rotate( PI / 2);
    fill("turquoise");
    stroke("white");
    rect(0, 0, 300, 40);
    fill("lavender");
    stroke("grey");
    circle(-50, 20, 90, 40);
    translate(-30, 70)
    rotate( PI / 2);
    fill("turquoise");
    stroke("white");
    rect(0, 0, 280, 40);
}
function take_snapshot(){
save("img.jpeg");
}