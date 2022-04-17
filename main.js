function preload()
{

}
function setup()
{
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(error, results)
{
    console.log(results);
}
function modelLoaded()
{
    console.log("Posenet is initialized");
}
function draw()
{
    
}