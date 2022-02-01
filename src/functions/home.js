function home() {
  //h1 creation
  const content = document.getElementById("content");

  const h = document.createElement("h1");
  h.className = "h1";
  content.appendChild(h);
  h.textContent = "Welcome to our Restaurant";
  const p = document.createElement("p");
  content.appendChild(p);
  p.textContent =
    "We have the best wine to get you drunk as hell. You wont even remember paying the overpriced bill!";
}
export { home };
