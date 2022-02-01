function clearbody() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.firstChild.remove();
  }
}
export { clearbody };
