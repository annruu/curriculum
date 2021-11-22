$( document ).ready(function() {
    console.log( "ready!" );

window.onload = function() { // add window.onload here and set it euqal to a function
//Images in variables
    var img1 = "https://annruu.github.io/curriculum/assets/images/girl-an-3.jpg";
    var img2 = "https://annruu.github.io/curriculum/assets/images/girl-an-4.jpg";

// Get the modal
    var modal = document.getElementById('myModal');
  
// Get the image and insert it inside the modal
    //var pImg = document.getElementById('myImg');
    //var mImg = document.getElementById('img-container');
    var pImg = $(".p-img");//Imagen del portafolio
    var mImg = $(".m-img");//Imagen del modal

    pImg.onclick = function() {
        console.log("Se muestra imagen");
        modal.style.display = "block";
        $('.modal-content, .modal').removeClass('animate__fadeOut');
        $('.modal-content, .modal').addClass('animate__fadeIn');
        mImg.src = this.src;
    }

//CLOSE MODAL
// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        $('.modal-content, .modal').removeClass('animate__fadeIn');
        $('.modal-content, .modal').addClass('animate__fadeOut');
        setTimeout(function(){
            modal.style.display = "none";
        },300);
    }

} // close the function

/*
window.onload = function() { // add window.onload here and set it euqal to a function
    // Get the modal
    var modal = document.getElementById('myModal');
  
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        $('.modal-content, .modal').removeClass('animate__animated animate__fadeOut');
        $('.modal-content, .modal').addClass('animate__animated animate__fadeIn');
      modalImg.src = this.src;
    //   captionText.innerHTML = this.alt;
    }
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        $('.modal-content, .modal').removeClass('animate__animated animate__fadeIn');
        $('.modal-content, .modal').addClass('animate__animated animate__fadeOut');
        setTimeout(function(){
            modal.style.display = "none";
        },300);
    }
} // close the function

*/


});