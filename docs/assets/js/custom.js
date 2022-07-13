function myFunction() {
    let  dots = document.getElementById("dots");
    let  moreText = document.getElementById("more");
    let  btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "See less"; 
      moreText.style.display = "inline";
    }
}