function openNav(){
    var x = document.getElementById("nav");

    if (x.className === "nav") {
        x.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else {
        x.className = "nav";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }

}