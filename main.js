function preload(){
    Funky_Nose = loadImage("Clown_Nose.png")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    PoseIdentifier = ml5.poseNet(video, ModelActivated);
    PoseIdentifier.on("pose", gotPoses)
}

nose_x = 0
nose_y = 0

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x +"and nose y =" +nose_y);
    }
}

function ModelActivated(){
    console.log("PoseNet Model has Been launched");
}

function draw(){
    image(video, 0, 0, 600, 500);
    image(Funky_Nose, nose_x - 45, nose_y, 40, 40);
}

function Snapshot(){
    save("Clownified.png");
}

