
function setup() {

createCanvas(650,400);
video = createCapture(VIDEO);
video.size(600,300) ;

poseNet = ml5.poseNet(vodeo,modelLoaded);
poseNet.on('pose',gotposes) ;
}


function  modelLoaded() {

    console.log('model loaded !')
}

function gotposes(results) {
 
    if(results.lenght > 0)
    {

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY) ;

    }

}

function draw() {

    background("#D3D3D3");
      if(noseX < 300) 
      {
    
              marioX = marioX - 1;
      }

      if(nose > 300 )

      {
        marioX = marioX + 1;
      }
      
      if(noseY < 150) {

        marioY = marioY - 1;
      }
      Image(img,marioX,marioY,40,70)
}