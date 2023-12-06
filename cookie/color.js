window.addEventListener("load", () => {
  document.body.style = `background-color:${localStorage.getItem("yourColor")}`;
});
const colorInput = document.getElementById("color-input");
colorInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  document.body.style = `background-color:${e.target.value}`;
  localStorage.setItem("yourColor", e.target.value);
});
