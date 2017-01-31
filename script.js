var ry = null;

function random_imglink(){
var myimages=new Array()
myimages[1]= "images/birdieandbitty.png"
myimages[2]="images/mountainrise.png"
myimages[3]="images/rose.png"
myimages[4]="images/venusfly.png"
myimages[5]="images/ralphie.png"
myimages[6]="images/mountainnight.png";
myimages[7]="images/mermaid.png";
myimages[8]="images/swirl.png";
myimages[9]="images/rainbowhorse.png";
myimages[10]="images/mushroom.png";
myimages[11]="images/grim.png";
myimages[12]="images/mucha.png";
myimages[13]="images/hand.png";


ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.getElementById("doodle").src = myimages[ry];
}

function imgDescription() {
var imgdesc = new Array()
imgdesc[1]= "<p class=titletext>birdie and bitty</p> micron pen"
imgdesc[2]= "<p class=titletext>scrap paper mountain</p> micron pen and copic marker"
imgdesc[3]= "<p class=titletext>peony</p> copic marker and fake rhinestones"
imgdesc[4]= "<p class=titletext>fly traps</p> copic marker"
imgdesc[5]= "<p class=titletext>ralphie</p> micron pen and copic marker"
imgdesc[6]= "<p class=titletext>neon northern lights</p> micron pen and copic marker"
imgdesc[7]= "<p class=titletext>mucha mermaid</p> micron pen, copic marker, white gel pen, and silver acrilyic paint"
imgdesc[8]= "<p class=titletext>drops</p> micron pen and copic marker"
imgdesc[9]= "<p class=titletext>galaxy pony</p> micron pen and copic marker"
imgdesc[10]= "<p class=titletext>mushroom</p> copic marker and pencil"
imgdesc[11]= "<p class=titletext>grim</p> micron pen and copic marker"
imgdesc[12]= "<p class=titletext>mucha study</p> micron pen and copic marker"
imgdesc[13]= "<p class=titletext>crystals and pearls</p> micron pen"

var xy = ry
document.getElementById("info").innerHTML = imgdesc[xy];
document.getElementById("info").style.visibility = "visible";
}

showImg = function()
{
    x=document.getElementById("doodle")
    x.style.visibility="visible";
	r=document.getElementById("plus")
	r.style.visibility="visible";
	document.getElementById("info").innerHTML = "";
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

