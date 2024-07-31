const input = document.getElementById("input");
const tahmin = document.getElementById("tahmin");
const yeni = document.getElementById("yeni");
const bilgi = document.getElementById("bilgi");

function random() {
  return Math.floor(Math.random() * 100);
}

let newRandom = random();
console.log(newRandom);
let count = 5;

function kontrol() {
  bilgi.style.display = "block";
  count--;
  const sayiTahmin = parseInt(input.value);
  if (isNaN(sayiTahmin)) {
    bilgi.textContent = `Geçersiz karakter, sadece sayı giriniz, kalan tahmin hakkınız ${count}`;
  } else if (sayiTahmin === newRandom) {
    bilgi.textContent = "Tebrikler sayıyı bildiniz!";
    startConfetti();
    tahmin.disabled = true;
  } else if (sayiTahmin < newRandom) {
    bilgi.textContent = `Daha büyük bir sayı giriniz, kalan tahmin hakkınız ${count} `;
  } else if (sayiTahmin > newRandom) {
    bilgi.textContent = `Daha küçük bir sayı giriniz, kalan tahmin hakkınız ${count} `;
  }
  if (count === 0 && sayiTahmin !== newRandom) {
    bilgi.textContent = `Tahmin hakkınız bitti. Doğru sayı: ${newRandom}`;
    tahmin.disabled = true;
    document.body.style.backgroundImage = "url(img/phonk-troll-face.gif)";
    document.body.style.backgroundSize = "contain";
  }
  input.value = "";
}

tahmin.addEventListener("click", () => {
  kontrol();
});

input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    kontrol();
  }
});

yeni.addEventListener("click", () => {
  stopConfetti();
  document.body.style.backgroundImage = "url(img/backg.png)";
  document.body.style.backgroundSize = "cover";
  bilgi.style.display = "none";
  newRandom = random();
  tahmin.disabled = false;
  count = 5;
  bilgi.textContent = "";
  input.value = "";
});
