rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
leftWristScore = 0;
rightWristScore = 0;
songStatuspp = '';
songStatuspotter = '';
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
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log(ml5.version + "Posenet Initalized");
}
function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            leftWristScore = results[0].pose.keypoints[9].score;
            rightWristScore = results[0].pose.keypoints[10].score;
            console.log(leftWristScore)
        }
}
function draw() {
    image(video, 0, 0, 600, 500);
    songStatuspp = songpp.isPlaying();
    songStatuspotter = songpotter.isPlaying();
    fill("#52bbf7");
    stroke("#0558e8");
    if (leftWristScore > 0.2) {
        circle(leftWristX, leftWristY, 20);
        songpp.stop();
        if (songStatuspotter == false) {
            songpotter.play();
            document.getElementById("d").innerHTML = "Song:Harry Potter Theme Song";
        }
    }
    if (rightWristScore > 0.2) {
        circle(rightWristX, rightWristY, 20);
        songpotter.stop();
        if (songStatuspp == false) {
            songpp.play();
            document.getElementById("d").innerHTML = "Song:Peter Pan Song";
        }
    }


}