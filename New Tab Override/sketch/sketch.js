function setup()
{
 noCanvas();
 let r= floor(random(1,4));
let img=createImg('images/nature'+r+'.jpg');
img.size(windowWidth,windowHeight);
img.position(0,0);
}