rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
songpp = '';
songpotter = '';
function preload() {
    songpp = loadSound("music2.mp3");
    songpotter = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded)
    poseNet.on();
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
console.log(ml5.version + "Posenet Initalized");
}
function gotPoses(error,results){
if(error){
console.error();
}
else{
if(results.length > 0){
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
}
}
}