var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
for(var i=0; i<navMenuAnchorTags.length; i++)
{
	navMenuAnchorTags[i].addEventListener('click', function(event)
	{
		event.preventDefault();
		var targetSectionID=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionID);
		console.log(targetSection);
		var interval=setInterval(function()
		{
			var targetSectionCoordinates=targetSection.getBoundingClientRect();
			if(targetSectionCoordinates.top<=0)
			{
				clearInterval(interval);
				return;
			}
			window.scrollBy(0, 40);
		}, 10);
	});
}

var progressBar=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone=false;

function initialiseBars()
{
	var temp="";
	for(let bar of progressBar)
	{
		bar.style.width=0+'%';
	}
}

initialiseBars();

function fillBars()
{
	for(let bar of progressBar)
	{
		let targetWidth=bar.getAttribute('data-skill-level');
		let currentWidth=0;
		let interval=setInterval(function()
		{
			if(currentWidth>targetWidth)
			{
				clearInterval(interval);
				return;
			}
			currentWidth++;
			bar.style.width=currentWidth+'%';
		}, 8)
	}
}

function checkScroll()
{
	var coordinates=skillsContainer.getBoundingClientRect();
	if(coordinates.top<window.innerHeight && !animationDone)
	{
		animationDone=true;
		fillBars();
	}
	else if(coordinates.top>window.innerHeight)
	{
		animationDone=false;
		initialiseBars();
	}
}