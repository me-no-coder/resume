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

var progressBar = document.querySelectorAll('.skill-progress>div');
var skillsContainer = document.getElementById('skill-container');
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

// initialiseBars();

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

let imagePopup = document.getElementById("image-popup");

function openPopup() {
	// document.getElementById("image-popup").style.display = "flex";
	imagePopup.classList.add("show");
}

function closePopup() {
	setTimeout(() => {
		imagePopup.classList.remove("show", "fade-out");
	}, 300);
}

let text = "Mrenank Rastogi"; // The text to be animated
const container = document.getElementById("my-name");
let index = 0;

function removeText() {
	container.innerHTML = text.substr(0, index);
	index--;
	if(index >= 0) {
		setTimeout(removeText, 140);
	}
	else if(text == 'Mrenank Rastogi') {
		text = "Salesforce Developer";
		typeText();
	}
	else if(text == 'Salesforce Developer') {
		text = 'Web Developer';
		typeText();
	}
	else if(text == 'Web Developer') {{
		text = 'Mrenank Rastogi';
		typeText();
	}}
}

function typeText() {
	container.innerHTML += text.charAt(index);
	index++;
	if (index < text.length) {
		setTimeout(typeText, 140); // Delay between each character (adjust as desired)
	}
	else {
		removeText();
	}
}

typeText(); // Start the typing animation

function checkScroll()
{
	var coordinates = skillsContainer.getBoundingClientRect();
	if(coordinates.top < window.innerHeight && !animationDone)
	{
		animationDone = true;
		fillBars();
	}
	else if(coordinates.top > window.innerHeight)
	{
		animationDone = false;
		initialiseBars();
	}
}

function customToastMessage(event) {
    event.preventDefault(); // Prevent form submission

    let toastMessage = 'Thank you! The message was sent successfully.';
    let firstName = document.getElementsByName('firstname')[0].value;
    let emailId = document.getElementsByName('email')[0].value;

    if(emailId.trim() === '' || !emailId.includes('@') || !emailId.includes('.')) {
      toastMessage = 'Please enter a valid email ID.';
    }
	else if(firstName.trim() === '') {
      toastMessage = 'Kindly enter the name.';
    }

    var x = document.getElementById("toast");
    var y = document.getElementById("desc");
    y.innerHTML = toastMessage;
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 5000);
}