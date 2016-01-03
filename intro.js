var gl; // A global variable for the WebGL context

function start() {
  var canvas = document.getElementById("glcanvas");

  //Initialize the GL context
  gl = initWebGL(canvas);

  //Only continue if WEbGL is available and working
  
  if(gl) {
    //Set clear color to black, fully opague
    gl.clearColor(0.0, 0.0, 0.0, 1,0);
    // Enable Depth testing
    gl.enable(gl.DEPTH_TEST);
    // Near Things obscure far things
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTHBUTTER_BIT);
  }

}
