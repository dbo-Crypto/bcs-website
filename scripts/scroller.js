const scroller = document.querySelector("#index_scroller");

scroller.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${scroller.scrollTop}`;
});