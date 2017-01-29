function random_imglink(){
var myimages=new Array()
myimages[1]= "images/me.png"
myimages[2]="images/mushroom.png"
myimages[3]="images/rose.png"
myimages[4]="images/pup_4.jpg"
myimages[5]="images/pup_5.jpg"
myimages[6]="images/pup_6.jpg"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.getElementById("doodle").src = myimages[ry];
}

showImg = function()
{
    x=document.getElementById("doodle")
    x.style.visibility="visible";
}

changeImg = function()
{
	document.getElementById("spin").src="images/roulettewheelspin.gif";
}

rotateImg = function()
{
	var xy=Math.floor(Math.random()*50)
	document.getElementById("doodle").css('transform', 'rotate(' + xy + 'deg)');
}
