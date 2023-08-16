const input = document.getElementById("input");

let angka;
for (let i = 0; i <= 101; i++) {
  angka = document.createElement("div");
  angka.className = "angka";
  angka.style.fontSize = "24px";
  angka.style.margin = "5px auto";
  angka.textContent = i;

  if (i % 2 === 0) angka.style.backgroundColor = "#64FA8B";
  if (i % 2 === 1) angka.style.backgroundColor = "#EFF030";

  document.querySelector(".number").appendChild(angka);
}

const list = document.querySelectorAll(".angka");

list.forEach((el) => {
  const li = el.textContent;

  if (li <= 1) return false;

  for (let i = 2; i < li; i++) {
    if (li % i == 0) return false;
  }
  el.style.backgroundColor = "#F02016";
});

const button = document.getElementById("button");
const p = document.getElementById("requared");

button.addEventListener("click", () => {
  if (input.value == "") {
    p.textContent = "input the value";
    p.style.color = "red";
  }
  if (/[a-zA-Z]/.test(input.value)) {
    p.textContent = "input must be a number";
    p.style.color = "red";
  }
  if (input.value == input.value) {
    const listDiv = document.querySelector(".number");
    listDiv.innerHTML = "";

    for (let i = 0; i <= input.value; i++) {
      angka = document.createElement("div");
      angka.className = "angka";
      angka.style.fontSize = "24px";
      angka.style.margin = "5px auto";
      angka.textContent = i;

      if (i % 2 === 0) angka.style.backgroundColor = "#64FA8B";
      if (i % 2 === 1) angka.style.backgroundColor = "#EFF030";

      document.querySelector(".number").appendChild(angka);
    }
    const list = document.querySelectorAll(".angka");

    list.forEach((el) => {
      const li = el.textContent;

      if (li <= 1) return false;

      for (let i = 2; i < li; i++) {
        if (li % i == 0) return false;
      }
      el.style.backgroundColor = "#F02016";
    });
  }
});
