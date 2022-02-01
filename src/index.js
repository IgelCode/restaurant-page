console.log("Fucking Webpack");

import { pageLoad } from "./functions/pageload.js";
import { menupage } from "./functions/menupage.js";
import { contactpage } from "./functions/contactpage.js";
import { clearbody } from "./functions/clearbody.js";
import "./style.css";

pageLoad();

const homebtn = document.querySelector("#home");
const menubtn = document.querySelector("#menu");
const contactbtn = document.querySelector("#contact");

homebtn.addEventListener("click", home);
function home() {
  clearbody();
  pageLoad();
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
