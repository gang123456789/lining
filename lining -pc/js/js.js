var pic=['tu1.jpg','logo.jpg','tu3.jpg'];
var oImg =document.getElementById('show');
var i =0;
function disp(){
   oImg.src="images/"+ pic[i];
    i++;
    if(i == pic.length) i=0;
    console.log(i);
    
   
    
}
 setInterval(disp,2000);