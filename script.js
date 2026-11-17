const dialog = document.querySelector("#reveal");
const count = document.querySelector("#count");
const basketGif = document.querySelector("#basket-gif");
for (const image of document.querySelectorAll(".product-image img")) {
  function showImageFallback() {
    image.hidden = true;
    image.closest(".product-image").classList.add("image-unavailable");
  }
  image.addEventListener("error", showImageFallback);
  if (image.complete && !image.naturalWidth) showImageFallback();
}

function showBasket() {
  const hasItem = count.textContent === "1";
  document.querySelector("#example-iban").hidden = !hasItem;
  const icon = document.querySelector("#reveal-icon");
  icon.hidden = hasItem;
  icon.textContent = "🛒";
  basketGif.hidden = !hasItem;
  if (hasItem) basketGif.src = "sepet-video.gif";
  document.querySelector("#reveal-title").textContent = hasItem ? "Demo sepetin" : "Sepetin boş";
  document.querySelector("#reveal-copy").textContent = hasItem
    ? "PlayStation 5 Slim ve temsili hediyeler (GTA VI ve HDMI kablosu) demo sepetine eklendi."
    : "İlandaki Sepete Ekle düğmesiyle deneyebilirsin.";
  dialog.showModal();
}

document.querySelector("#add").addEventListener("click", () => {
  count.textContent = "1";
  showBasket();
});

document.querySelector("#basket").addEventListener("click", showBasket);
dialog.addEventListener("close", () => basketGif.removeAttribute("src"));
