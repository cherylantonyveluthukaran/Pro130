music="";
music_1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
statusLeftWrist="";
scoreRightWrist=0;
statusRightWrist="";

function preload(){
    music=loadSound("music.mp3");
    music_1=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("PoseNet is Initialized");

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist)

        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist="+scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+",leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+",rightWristY="+rightWristY);


    }
}

function draw(){
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");

    statusLeftWrist=music.isPlaying();
    console.log(statusLeftWrist);

    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        music_1.stop();

        if(statusLeftWrist==false){
            music.play();

        }else{
            document.getElementById("song").innerHTML = "Name of the song = Harry Potter Theme song" 
        }
    }
    if(scoreRightWrist>0.2){
        circle(rightWristX,rightWristY,20);
        music.stop();

        if(statusRightWrist==false){
            music_1.play();

        }else{
            document.getElementById("song").innerHTML = "Name of the song = Peter Pan Song"
        }
    }
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist)

        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist="+scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+",leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+",rightWristY="+rightWristY);


    }
}

    