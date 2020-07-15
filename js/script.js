AOS.init();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// fetch('https://raw.githubusercontent.com/ansarinaeemakhtar/resume-1/master/resume.json')
// // .then below runs when the remote server responds
// .then(response => response.json())
// .then(resume => console.log(resume.basics.name));

// document.write(resume);
