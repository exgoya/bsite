
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    // console.log(typeof slideIndex);
    // console.log(typeof n);
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    // console.log("showSlides: "+n);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }

  var num = 0;
  var para = document.location.href.split("?"); 
  num=Number(para[1]);
  if (num > 0) {
    currentSlide(para[1]);
    // console.log(para[1]);
    slideIndex=num;
    // console.log(slideIndex);
  }
  