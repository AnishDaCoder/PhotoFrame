function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video, 0, 0, 640, 480);
    rect(0,0,20,1000);
    rect(21,460,2000,20)
    rect(620,0,20,1000)
    rect(21,0,2000,20)
    ellipse(0,0,60,60)
    ellipse(640,0,60,60)
    ellipse(0,480,60,60)
    ellipse(640,480,60,60)
    
    
    
}
function take_snapshot(){
    save('anish.png');
}

