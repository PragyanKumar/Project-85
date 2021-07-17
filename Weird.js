var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d")
rover_width=100
rover_height=90
rover_x= 10
rover_y= 10
img_array= ["Parking.jpg","Parking2.jpg","Parking3.jpg"]
var rand= Math.floor(Math.random()*4)
background_image= img_array[rand]
rover_image="YellowCar.png"
function add(){
     background_image_tag=new Image()
    background_image_tag.onload=upLoadBackground
    background_image_tag.src=background_image
     rover_image_tag=new Image()
    rover_image_tag.onload=upLoadRover
    rover_image_tag.src=rover_image
}
function upLoadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height)
}
function upLoadRover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown", my_keyDown)
function my_keyDown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
    if (keyPressed=="38"){
        up()
        console.log("up")
    }
    if (keyPressed=="40"){
        down()
        console.log("down")
    }
    if (keyPressed=="37"){
        left()
        console.log("left")
    }
    if (keyPressed=="39"){
        right()
        console.log("right")
    }
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10
        console.log("when up arrow is pressed, x=" + rover_x + " | y= " + rover_y)
        upLoadBackground()
        upLoadRover()
    }

}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10
        console.log("when down arrow is pressed, x=" + rover_x + " | y= " + rover_y)
        upLoadBackground()
        upLoadRover()
    }

}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10
        console.log("when left arrow is pressed, x=" + rover_x + " | y= " + rover_y)
        upLoadBackground()
        upLoadRover()
    }

}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10
        console.log("when right arrow is pressed, x=" + rover_x + " | y= " + rover_y)
        upLoadBackground()
        upLoadRover()
    }

}