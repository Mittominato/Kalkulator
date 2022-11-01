const screen = document.querySelector(".screen");
  const button = document.querySelector(".buttons");
  const screen2 = document.querySelector(".screen2");
  let hasil = 0;
  let inputhidden;
  button.addEventListener("click", function(e){
      if (e.target.className != "calc-button-samadengan" && e.target.className != "calc-button-double") {
          if (screen.innerHTML == 0 && screen2.innerHTML == 0) {
              screen.innerHTML = "";
              screen2.innerHTML = "";
              screen.innerHTML += e.target.innerHTML;
              screen2.innerHTML += e.target.value;
              inputhidden = screen2.innerHTML;
          }else if (screen.innerHTML == "TOLOL") {
              screen.innerHTML = "";
              screen2.innerHTML = "";
              screen.innerHTML += e.target.innerHTML;
              screen2.innerHTML += e.target.value;
              inputhidden = screen2.innerHTML;
          }else {
              screen.innerHTML += e.target.innerHTML;
              screen2.innerHTML += e.target.value;
              inputhidden = screen2.innerHTML;
          }
      }else if (e.target.className == "calc-button-samadengan") {
          if (screen.innerHTML != 0) {
              hasil = eval(inputhidden);
              screen.innerHTML = hasil;
              screen2.innerHTML = hasil;
          }else{
              screen.innerHTML = "TOLOL";
              screen2.innerHTML = "";
          }
      }else if (e.target.className == "calc-button-double") {
          screen.innerHTML = "0";
          screen2.innerHTML = "0";
      }
  });