function toggleSeeMore() {
    var content = document.getElementById("seeMoreContent");
    var btn = document.getElementById("seeMoreBtn");
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.innerText = "See Less";
    } else {
        content.style.display = "none";
        btn.innerText = "See More";
    }
}