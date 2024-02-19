function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(550, 500);
    canvas.position(650, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}

function draw(){
    background("#f21b58");
}

function modelLoaded(){
    console.log("PoseNet is initialised.");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}