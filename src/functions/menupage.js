function menupage() {
  //h1 creation
  const content = document.getElementById("content");
  const h = document.createElement("h1");
  h.className = "h1";
  content.appendChild(h);
  h.textContent = "You better order a few drinks before you try our food.";
  const p = document.createElement("p");
  content.appendChild(p);
  p.textContent =
    "(Because it tastes like a weasel. A dead weasel. That got hit by a car. Three days ago.)";
}
export { menupage };
