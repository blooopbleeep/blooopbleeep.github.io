// JavaScript source code

 var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);
        
        // ProgramCodeGoesHere
        draw = function() {
        strokeWeight(2);
        stroke(255, 255, 255);
        fill(78, mouseX, 140);
        image(getImage("https://www.mariowiki.com/images/0/03/PMCS_MarioSprite.png"), mouseX, mouseY, 200,200);
           };
        }
     };

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc);

    
