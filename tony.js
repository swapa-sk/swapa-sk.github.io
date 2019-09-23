//function getstuff(){
	/*document.querySelector('#tuna').onclick=talk;*/
//	var list=document.querySelectorAll('#tuna');
	/*list[1].onclick=talk;*/
////	for(i=0;i<list.length;i++)
///{
		//list[i].onclick=talk;
//	}
//}
//	function talk(){
// alert('hello swapa');
//	}
//	window.onload=getstuff;	
function DoFirst(){
	barSize=600;
	myvideo=document.getElementById('myvideo');
	button=document.getElementById('playbutton');
	bar=document.getElementById('defaultbar');
	progressbar=document.getElementById('progressbar');
	button.addEventListener('click',playorpause,false);
	bar.addEventListener('click',clickbar,false);
	
}
function playorpause(){
	if(!myvideo.paused&&!myvideo.ended)
	{
		myvideo.pause();
		button.innerHTML='play';
		window.clearInterval(updatebar);
		
	}
	else
	{
		myvideo.play();
		button.innerHTML='pause';
		updatebar=setInterval(update,500);
	}
	
}
function update(){
	if(!myvideo.eneded)
	{
		var size=parseInt(myvideo.currentTime*barSize/myvideo.duration);
		progressbar.style.width=size+'px';
	}
	else
	{
			progressbar.style.width='0px';
			button.innerHTML='pause';
			window.clearInterval(updatebar);
			
	}
}
function clickbar(e){
	if(!myvideo.paused && !myvideo.ended)
	{
		var mouseX=e.pageX-bar.offsetLeft;
		var newtime=mouseX*myvideo.duration/barSize;
		myvideo.currentTime=newtime;
		progressbar.style.width=mouseX+'px';
	}
}
window.addEventListener('load',DoFirst,false);
