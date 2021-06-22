canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = "100";
rover_height = "90";
rover_x = "10";
rover_y = "10";
background_image = "racing.jpg";
rover_image = "car1.png";

//function add() {
    //background_img = new Image();
    //background_img.onload = uploadbackground();
    //background_img.src = background_img;

    //car1_img = new Image();
    //car1_img.onload = uploadrover();
    //car1_img.src = car1;
//}

function add() {
    background_imgTag = new Image(); 
    //defining a variable with a new image
     background_imgTag.onload = uploadbackground; 
    // setting a function, onloading this variable 
    background_imgTag.src = background_image; 
    // load image 
    rover_imgTag = new Image(); 
    //defining a variable with a new image 
    rover_imgTag.onload = uploadrover; 
    // setting a function, onloading this variable 
    rover_imgTag.src = car1_image; 
    // load image 
 }

    function uploadbackground() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    }

    function uploadrover() {
        ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width,car1_height);
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) {
        keypress = e.keyCode;
        console.log(keypress);
        if (keypress == 38) {
            up();
            console.log("up");

        }

        if (keypress == 40) {
            down();
            console.log("down");

        }

        if (keypress == 37) {
            left();
            console.log("left");

        }

        if (keypress == 39) {
            right();
            console.log("right");

        }

    }