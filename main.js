noseX=0;
noseY=0;

function preload (){
clown_nose= loadImage("https://i.postimg.cc/cHmcwNqH/download-removebg-preview.png");
};
function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();  
    video.size(300, 300)
   posenet= ml5.poseNet(video, modelLoaded);
   posenet.on('pose', getPoses);

}
function getPoses(results){
    if (results.length > 0){
        console.log(results);
         noseX= results[0].pose.nose.x -15;
         noseY= results[0].pose.nose.y -13;
    }
}
function modelLoaded(){
    console.log("modelLoaded");
}
function draw(){
    image(video, 0, 0, 300, 300);
    path=document.getElementById("filters").value;
    filter_1= eval(path);
    if(path == "BLUR"|| path=="POSTERIZE"){
        filter(filter_1, 5);
    }
    else{
        filter(filter_1);
    }
    image(clown_nose, noseX, noseY, 30, 30);

}
function take_snapshot(){
    save("img.jpeg");
}