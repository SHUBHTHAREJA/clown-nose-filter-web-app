function preload(){
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoded);
poseNet.on('pose', gotPose);
}


function modelLoded(){
    console.log("poseNET is started");
}
function gotPose(results){
    console.log(results);
    if ( results.length > 0) {
        console.log("x is =" + results[0].pose.nose.x);
        console.log("y is =" + results[0].pose.nose.y);
    }
}


function draw(){
    image(video,0,0,300,300)
     
}

function take_snap(){
    save("realtimeFilter.png")
}