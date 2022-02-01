console.log("Fucking Webpack");
import { Logo } from "./img/logo.png";
import { pageLoad } from "./functions/pageload.js";
import { menupage } from "./functions/menupage.js";
import { contactpage } from "./functions/contactpage.js";
import { clearbody } from "./functions/clearbody.js";
import { home } from "./functions/home.js";
import "./style.css";

pageLoad();

const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const contactbtn = document.querySelector("#contact");

homebtn.addEventListener("click", homefunc);
function homefunc() {
  clearbody();
  home();
}

menubtn.addEventListener("click", menu);
function menu() {
  clearbody();
  menupage();
}

contactbtn.addEventListener("click", contact);
function contact() {
  clearbody();
  contactpage();
}
