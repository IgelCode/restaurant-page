function clearbody() {
  while (body.firstChild) {
    body.firstChild.remove();
  }
}
export { clearbody };
