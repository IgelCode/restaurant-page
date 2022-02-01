function contactpage() {
  //h1 creation
  const content = document.getElementById("content");
  const h = document.createElement("h1");
  h.className = "h1";
  content.appendChild(h);
  h.textContent = "Do not contact us.";
  const p = document.createElement("p");
  content.appendChild(p);
  p.textContent = "Really, just dont.";
  const pp = document.createElement("p");
  content.appendChild(pp);
  pp.textContent = "If you still insist, call 01234-notfake.";
}
export { contactpage };
