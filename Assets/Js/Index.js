window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var x = document.getElementById("image");

var i=1;

myFunc();

function myFunc(){
	x.style.backgroundImage = "url('Assets/Img/"+ i +".jpg')";
	i++;
	if (i==4) {
		i=1;	
	}
	setTimeout(myFunc, 3000);
}


// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
  
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}