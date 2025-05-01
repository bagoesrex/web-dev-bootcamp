document.querySelector("ul").lastElementChild.textContent = "Bagoes";

document.getElementById("title").innerHTML = "<em>Haloha</em>";
document.querySelector("#title").classList.add("huge");

document.querySelector(".list a").style.color="blue";

document.body.style.backgroundColor = "#7634b9 ";

document.querySelectorAll(".list").forEach(item => {
    item.style.color = "red"
});