// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");

// Get the image and insert it inside the modal - use its "alt" text as a caption

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

img4.onclick = function () {
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}

img5.onclick = function () {
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
}

img6.onclick = function () {
    modal6.style.display = "block";
    modalImg6.src = this.src;
    captionText6.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

span4.onclick = function () {
    modal4.style.display = "none";
}

span5.onclick = function () {
    modal5.style.display = "none";
}

span6.onclick = function () {
    modal6.style.display = "none";
}
