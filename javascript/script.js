
var images=["url('images/backgroundimage2.jpg')","url('images/backgroundimage3.jpg')","url('images/backgroundimage4.jpg')","url('images/backgroundimage5.jpg')","url('images/backgroundimage.jpg')"];
var i=-1; 

function changeBackground(){
	
	i+=1;
	if(i===images.length){
	i=0;
	}
	document.body.style.background=images[i];
	//setTimeout(changeBackground,5000);  will use when I learn to fade/wipe images
};

//setTimeout(changeBackground,5000);



