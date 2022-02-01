function pageLoad() {
  //Header creation
  const body = document.getElementById("body");
  const header = document.createElement("header");
  header.className = "header";
  header.id = "header";
  body.appendChild(header);

  //Header Logo

  const logo = new Image();
  logo.src = "../img/logo.png";
  logo.id = "logo";
  header.appendChild(logo);

  //Header Linklist creation
  let ul = document.createElement("ul");
  header.appendChild(ul);
  let homeli = document.createElement("li");
  homeli.textContent = "Home";
  homeli.id = "home";
  ul.appendChild(homeli);
  let menuli = document.createElement("li");
  menuli.textContent = "Menu";
  menuli.id = "menu";
  ul.appendChild(menuli);
  let contactli = document.createElement("li");
  contactli.textContent = "Contact";
  contactli.id = "contact";
  ul.appendChild(contactli);

  //h1 creation
  const content = document.createElement("div");
  content.id = "content";
  body.appendChild(content);
  const h = document.createElement("h1");
  h.className = "h1";
  content.appendChild(h);
  h.textContent = "Welcome to our Restaurant";
  const p = document.createElement("p");
  content.appendChild(p);
  p.textContent =
    "We have the best wine to get you drunk as hell. You wont even remember paying the overpriced bill!";

  //footer creation

  const footer = document.createElement("footer");
  footer.className = "footer";
  body.appendChild(footer);
  footer.textContent = "Copyright© 2022 by IgelCode";
}
export { pageLoad };
