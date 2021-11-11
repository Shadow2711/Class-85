canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images_array = ["Nasa_1.jpg", "Nasa_2.jpg", "Nasa_3.jpg", "Nasa_4.jpg"];
var randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
var rover_width = 100;
var rover_height=100;
var rover_x=10;
var rover_y=10;
background_image = nasa_images_array[randomNumber];
rover_image="rover.png";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRover;
    rover_imageTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '37'){
        Left();
        console.log("Left");
    }
    if(keypressed == '38'){
        Up();
        console.log("Up");
    }
    if(keypressed == '39'){
        Right();
        console.log("Right");
    }
    if(keypressed == '40'){
        Down();
        console.log("Down");
    }
}
function Up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function Down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function Left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function Right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}