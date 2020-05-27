var ham = document.querySelector(".ham");
var list = document.querySelector(".list");
var counter = true;
var drop = document.querySelector(".dropdown")

ham.addEventListener("click", function(){
	if (counter==true) {
		list.style.display = "block";
		counter=false;
	} else{
		list.style.display = "none";
		counter=true;
	}
});

drop.addEventListener("click", function(){
	document.querySelector("select").style.display="inline-block";
})

var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}