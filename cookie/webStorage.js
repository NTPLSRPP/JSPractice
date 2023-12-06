// let count = localStorage.getItem('counter')
// if (count === null) localStorage.setItem('counter', 1)
// else localStorage.setItem('counter', ++count)
// alert(localStorage.getItem('counter'))
let count = sessionStorage.getItem("counter");
if (count === null) sessionStorage.setItem("counter", 1);
else sessionStorage.setItem("counter", ++count);
alert(sessionStorage.getItem("counter"));
sessionStorage.setItem("color", "green");
sessionStorage.removeItem("counter");
sessionStorage.clear(); //remove all sessionStorage
