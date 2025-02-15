let btn = document.querySelector(".ajout");
btn.addEventListener("click",() => {
    if (btn.innerHTML === "Ajouter Cours"){
      btn.innerHTML = "Cours Ajouté";
      setTimeout(() => {
        btn.innerHTML = "Ajouter Cours";
    },3000);
    }
});


function myFunction() {
  let check1 = document.querySelector(".js-check1");
  let check2 = document.querySelector(".js-check2");
  let check3 = document.querySelector(".js-check3");
  let link = document.querySelector(".js-test");
  if (check1.checked === true && check2.checked === true && check3.checked === true) {
    link.style.display = "block";
  }
  else {
    link.style.display = "none";
  }
}
