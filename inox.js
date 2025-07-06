function BookClick() {
    // Hide button and show summary
    document.getElementById("button-container").style.display = "none";
    document.getElementById("summary-container").style.display = "block";

    // Set summary details
    document.getElementById("lblmovie").textContent = document.getElementById("lstmovie").value;
    document.getElementById("lbldate").textContent = document.getElementById("lstdate").value;
    document.getElementById("lblcinema").textContent = document.getElementById("lstcinema").value;
    document.getElementById("lbltime").textContent = document.getElementById("lsttime").value;

    // Set poster
    const movieName = document.getElementById("lstmovie").value;
    const poster = document.getElementById("imgPoster");

    if (movieName === "SIKANDAR") {
        poster.src = "images/sikandar.png";
    } else if (movieName === "BLACK BAG") {
        poster.src = "images/black-bag.png";
    } else {
        poster.src = ""; // Fallback for undefined or empty selection
    }
}

function editBooking(){
        document.getElementById("booking-title").innerHTML = "Modify Booking ";
        document.getElementById("btnBook").innerHTML = "save";
        document.getElementById("btnBook").className = "btn btn-success";
    

}
