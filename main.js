function pointHovered() {
    document.getElementById('point').classList.toggle("hovered");
}

function pointClicked() {
	document.getElementById("line").classList.toggle("clicked");
}

document.getElementById("point").addEventListener("mouseover", pointHovered);

document.getElementById("point").addEventListener("mouseout", pointHovered);

document.getElementById('myBtn').addEventListener("click", pointClicked);
