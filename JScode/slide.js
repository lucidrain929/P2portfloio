var picIndex=0;
var picSrcs=["abiteofchina2.jpg","abiteofchina3.jpg"];

function nextImage(){
	picIndex++
	if(picIndex == picSrcs.length){ 
		picIndex = 0;
	}

	document.getElementById("pic").src = "../images/" + picSrcs[picIndex];
 }

 function startSlideShow() {
 	var timer = setInterval(nextImage, 5500);
 }
 
