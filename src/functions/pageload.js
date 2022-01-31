function pageLoad() {
  const content = document.getElementById("content");
  let h = document.createElement("h1");
  h.className = "h1";
  content.appendChild(h);
  h.textContent = "Fucking Webpack";
}

export { pageLoad };
