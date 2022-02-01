nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;

function setup(){
canvas= createCanvas(700,450);
canvas.position(560,100);
video= createCapture(VIDEO);
video.size(500,500);
model=ml5.poseNet(video ,modelloaded);
model.on('pose', gotposes);
}

function modelloaded(){
    console.log("Model is loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex ="+nosex+ "nosey ="+nosey);
        
        rightwristx= results[0].pose.rightWrist.x;
        leftwristx= results[0].pose.leftWrist.x;
        difference= floor(leftwristx-rightwristx);
        console.log("leftwrist ="+leftwristx+"rightwrist ="+rightwristx+"Difference ="+difference);
    }
}

function draw(){
    background('#969A97');
    text("Dharun",nosex,nosey);
    textSize(difference);
    document.getElementById("size").innerHTML="Font size of a text will be ="+ difference+"px";
}

